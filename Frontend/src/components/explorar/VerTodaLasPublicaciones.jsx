"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import VistaPrevia from "./explorar-vista-previa/VistaPrevia";
import styled from "styled-components";

const Main = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 75px;
  margin: 0 auto 50px auto;
  width: 100%;
  max-width: 900px;
  li {
    width: 100%;
  }
`;

const VerTodaLasPublicaciones = () => {
  const [publicaciones, setPublicaciones] = useState([]);

  useEffect(() => {
    const obtenerPublicaciones = async () => {
      try {
        const response = await axios.get(process.env.VER_TODAS_PUBLICACIONES);
        setPublicaciones(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    obtenerPublicaciones();
  }, []);

  return (
    <>
      <Main>
        {publicaciones.map((item, key) => (
          <li key={key}>
            <VistaPrevia
              Publicado={true}
              cuerpo={item.colorCuerpo}
              navegacion={item.colorNavegacion}
              componente={item.colorComponente}
              boton={item.colorBoton}
              botonHover={item.colorBotonHover}
              textoLink={item.colorLink}
              textoNombre={item.colorNombre}
              textoDescripcion={item.colorDesc}
              src={item.src}
              nombre={item.nombre}
              desc={item.desc}
              likes={item.likes}
              id={item._id}
            />
          </li>
        ))}
      </Main>
    </>
  );
};

export default VerTodaLasPublicaciones;
