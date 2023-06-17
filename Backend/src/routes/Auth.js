import express from "express";
import Usuario from "../model/Usuario";

import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import cookie from "cookie";

const router = express.Router();

router.post("/crear", async (req, res) => {
  const { email, contraseña, confirmar } = req.body;

  try {
    const usuarioExistente = await Usuario.findOne({ email });

    console.log(email, contraseña, confirmar);

    if (usuarioExistente) {
      return res.status(400).json({ mensaje: "Email ya registrado" });
    }
    if (contraseña !== confirmar) {
      return res.status(400).json({ mensaje: "Las contraseñas no coinciden" });
    }

    // Encriptar la contraseña
    const contraseñaEncriptada = await bcrypt.hash(contraseña, 10);
    const confirmarEncriptada = await bcrypt.hash(confirmar, 10);

    const nuevoUsuario = new Usuario({
      email: email,
      contraseña: contraseñaEncriptada,
      confirmar: confirmarEncriptada,
    });

    // Guardar al usuario en la base de datos
    const usuarioGuardado = await nuevoUsuario.save();

    const token = jwt.sign(
      { userId: usuarioGuardado._id },
      "secreto_del_token",
      { expiresIn: "1h" }
    );

    res.status(201).json({ mensaje: "Usuario creado exitosamente", token });
  } catch (err) {
    return res.status(500).json({
      mensaje: "Ocurrió un error al crear el usuario",
      error: err.message,
    });
  }
});

router.post("/iniciar-sesion", async (req, res) => {
  const { email, contraseña } = req.body;

  try {
    const usuario = await Usuario.findOne({ email });

    // Verificar si el correo existe
    if (!usuario) {
      return res.status(401).json({ mensaje: "Email incorrecto" });
    }

    const contraseñaValida = await bcrypt.compare(
      contraseña,
      usuario.contraseña
    );

    // Verificar si la contraseña es válida
    if (!contraseñaValida) {
      return res.status(401).json({ mensaje: "Contraseña incorrecta" });
    }

    const token = jwt.sign(
      {
        email: email,
        exp: Math.floor(Date.now() / 1000) + 60 * 60 * 24 * 30,
      },
      "Secreto"
    );

    res
      .cookie("usuario", token, {
        httpOnly: true,
        sameSite: "lax",
        maxAge: 1000 * 60 * 60 * 24 * 30,
        path: "/",
      })
      .json({
        mensaje: "Inicio de sesión exitoso",
        data: token,
      });
  } catch (err) {
    return res.status(500).json({
      mensaje: "Ocurrió un error al iniciar sesión",
      error: err.message,
    });
  }
});

router.post("/cerrar-sesion", async (req, res) => {
  try {
    const token = req.headers.authorization;

    // Verificar si se proporcionó un token de autorización
    if (!token) {
      return res
        .status(401)
        .json({ mensaje: "Token de autorización no proporcionado" });
    }

    jwt.verify(token, "secreto_del_token", (err, decodedToken) => {
      if (err) {
        return res.status(200).json({ mensaje: "Sesión cerrada exitosamente" });
      } else {
        const blacklistedToken = new BlacklistedToken({ token });
        blacklistedToken.save((error) => {
          if (error) {
            return res
              .status(500)
              .json({ mensaje: "Error al guardar el token en la lista negra" });
          } else {
            return res
              .status(200)
              .json({ mensaje: "Sesión cerrada exitosamente" });
          }
        });
      }
    });
  } catch (err) {
    return res.status(500).json({
      mensaje: "Ocurrió un error al cerrar sesión",
      error: err.message,
    });
  }
});

module.exports = router;
