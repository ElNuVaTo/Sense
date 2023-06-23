"use client";
import Button from "@/utils/Button";
import InputTexto from "@/utils/InputTexto";
import axios from "axios";
import { useState } from "react";

const DatosDelUsuario = () => {
  const [usuarioName, setUsuarioName] = useState("");
  const [imagenUsuario, setImagenUsuario] = useState("");

  const onChangeUsuarioName = (e) => setUsuarioName(e.target.value);
  const onChangeImagenUsuario = (e) => setImagenUsuario(e.target.value);

  const cambiarDatosDelUsuario = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.patch(process.env.ACTUALIZAR_DATOS, {
        src: imagenUsuario,
        nombreDeUsuario: usuarioName,
      });
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <form onSubmit={cambiarDatosDelUsuario}>
        <InputTexto
          htmlFor="Nombre de usuario"
          placeHolder="Nombre"
          value={usuarioName}
          onChange={onChangeUsuarioName}
        />
        <InputTexto
          htmlFor="Imagen de usuario"
          placeHolder="Url"
          value={imagenUsuario}
          onChange={onChangeImagenUsuario}
        />

        <Button type="submit">Guardar cambios</Button>
      </form>
    </>
  );
};

export default DatosDelUsuario;
