const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");

const emailRegex =
  /^[\w-]+(\.[\w-]+)*@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*(\.[a-zA-Z]{2,})$/;

const Schema = mongoose.Schema;

const usuarioSchema = new Schema({
  nombreDeUsuario: {
    type: String,
  },
  email: {
    type: String,
    unique: true,
    required: [true, "El correo es necesario"],
    validate: {
      validator: function (value) {
        return emailRegex.test(value);
      },
      message: "El correo electrónico no es válido",
    },
  },
  contraseña: {
    type: String,
    required: [true, "El password es obligatorio"],
  },
  confirmar: {
    type: String,
    required: [true, "La contraseña no coincide"],
  },
  publicaciones: [
    {
      type: Schema.Types.ObjectId,
      ref: "Publicacion",
    },
  ],
});

usuarioSchema.plugin(uniqueValidator, {
  message: "Correo electrónico ya registrado",
});

const Usuario = mongoose.model("Usuario", usuarioSchema);

module.exports = Usuario;
