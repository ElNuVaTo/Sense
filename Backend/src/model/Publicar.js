const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const publiSchema = new Schema({
  nombre: String,
  des: String,
  src: String,
  colorFondoBody: String,
  colorNavegacion: String,
  colorFondoPerfil: String,
  colorBorderSolid: String,
  colorButton: String,
  colorTextNavegacion: String,
  colorTextNombre: String,
  colorTextDescripcion: String,
});

const Publicacion = mongoose.model("Publicacion", publiSchema);

module.exports = Publicacion;
