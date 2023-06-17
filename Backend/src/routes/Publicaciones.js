import express from "express";
import jwt from "jsonwebtoken";

import autenticacionMiddleware from "../middleware/Middleware";
import Publicacion from "../model/Publicar";
import Usuario from "../model/Usuario";

const router = express.Router();

// Ruta protegida
router.get("/toda-las/publicaciones", async (req, res) => {
  try {
    const dataBase = await Publicacion.find();
    res.status(200).json(dataBase);
  } catch (err) {
    return res.status(500).json({
      mensaje: "Ocurrió un error",
      error: err.message,
    });
  }
});

router.post("/publicar", autenticacionMiddleware, async (req, res) => {
  const body = req.body;
  try {
    const dataBase = await Publicacion.create(body);

    // Obtener el token desde las cookies
    const token = req.cookies.usuario;

    // Decodificar el token para obtener el correo electrónico
    const decodedToken = jwt.verify(token, "Secreto");

    // Obtener el correo electrónico del usuario
    const email = decodedToken.email;

    const usuario = await Usuario.findOne({ email });
    usuario.publicaciones.push(dataBase);

    // Guardar los cambios en el modelo de usuario
    await usuario.save();

    res.status(201).json(dataBase);
  } catch (err) {
    return res.status(500).json({
      mensaje: "Ocurrió un error",
      error: err.message,
    });
  }
});

module.exports = router;

// esta es una prueba