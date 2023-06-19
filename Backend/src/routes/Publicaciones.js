import express from "express";
import jwt from "jsonwebtoken";

import autenticacionMiddleware from "../middleware/Middleware";
import Publicacion from "../model/Publicar";
import Usuario from "../model/Usuario";

const router = express.Router();

router.get("/get-all", async (req, res) => {
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

router.post("/me-gusta/:id", autenticacionMiddleware, async (req, res) => {
  try {
    const { id } = req.params;

    // Buscar la publicación por su ID
    const publicacion = await Publicacion.findById(id);

    if (!publicacion) {
      return res.status(404).json({ error: "Publicación no encontrada" });
    }

    // Incrementar el contador de likes
    publicacion.likes += 1;

    // Guardar los cambios
    await publicacion.save();

    // Enviar la respuesta con la publicación actualizada
    res.json(publicacion);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al procesar la solicitud" });
  }
});


router.delete("/no-me-gusta/:id", autenticacionMiddleware, async (req, res) => {
  try {
    const { id } = req.params;

    // Buscar la publicación por su ID
    const publicacion = await Publicacion.findById(id);

    if (!publicacion) {
      return res.status(404).json({ error: "Publicación no encontrada" });
    }

    // Verificar si el usuario ya dio like a la publicación
    const index = publicacion.likes.findIndex((userId) => userId === req.user.id);

    if (index === -1) {
      return res.status(400).json({ error: "El usuario no ha dado like a esta publicación" });
    }

    // Quitar el like del usuario
    publicacion.likes.splice(index, 1);

    // Guardar los cambios
    await publicacion.save();

    // Enviar la respuesta con la publicación actualizada
    res.json(publicacion);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al procesar la solicitud" });
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
