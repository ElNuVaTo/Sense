const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const publiSchema = new Schema({
  src: String,
  nombre: String,
  desc: String,
  colorCuerpo: String,
  colorNavegacion: String,
  colorComponente: String,
  colorBoton: String,
  colorBotonHover: String,
  colorLink: String,
  colorNombre: String,
  colorDesc: String,
  likes: { type: Number, default: 0 },
});

const Publicacion = mongoose.model("Publicacion", publiSchema);

module.exports = Publicacion;
