"use client";
import styled from "styled-components";
import axios from "axios";

import VistaPreviaConfiguracion from "./VistaPreviaConfiguracion";
import Colores from "./Colores";


const BoxBtn = styled.div`
  margin: 0 auto 50px auto;
  width: max-content;
  button {
    margin: auto;
    background-color: var(--secundario);
    padding: 6px 30px;
    font-size: 18px;
    color: black;
    :hover {
      background-color: var(--secundario-monocromatico);
    }
  }
`;

const Publicar = () => {
  const publicarContenido = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <form onSubmit={publicarContenido}>
        <VistaPreviaConfiguracion />
        <Colores />

        <BoxBtn>
          <button type="submit">Publicar contenido</button>
        </BoxBtn>
      </form>
    </>
  );
};

export default Publicar;
