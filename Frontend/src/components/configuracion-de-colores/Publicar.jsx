"use client";
import { useContext, useState } from "react";
import styled from "styled-components";
import axios from "axios";

import Colores from "./Colores";
import ModalAlerta from "@/utils/ModalAlerta";
import VistaPreviaConfiguracion from "./VistaPreviaConfiguracion";
import { ColorAleatorioContext } from "@/context/ConseguirColorAleatorio";
import { UsuarioVistaPreviaContext } from "@/context/UsuarioVistaPrevia";

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
  const [conseguirColorVistaPrevia, setConseguirColorVistaPrevia] = useState();
  const [modalActive, setModalActive] = useState({
    boolean: false,
    texto: "",
  });

  const {
    colorCuerpo,
    colorNavegacion,
    colorComponente,
    colorBoton,
    colorBotonHover,
    colorLink,
    colorNombre,
    colorDesc,
  } = useContext(ColorAleatorioContext);
  const {
    src: src,
    nombre: nombre,
    desc: desc,
  } = useContext(UsuarioVistaPreviaContext);

  const publicarContenido = (e) => {
    e.preventDefault();

    axios
      .post(
        process.env.PUBLICAR_CONTENIDO,
        {
          src: src,
          nombre: nombre,
          desc: desc,
          colorCuerpo: colorCuerpo,
          colorNavegacion: colorNavegacion,
          colorComponente: colorComponente,
          colorBoton: colorBoton,
          colorBotonHover: colorBotonHover,
          colorLink: colorLink,
          colorNombre: colorNombre,
          colorDesc: colorDesc,
        },
        {
          withCredentials: true,
        }
      )
      .then((response) => {
        setModalActive({
          boolean: true,
          texto: "¡Tu contenido ha sido publicado satisfactoriamente!",
        });
      })
      .catch((err) => {
        setModalActive({
          boolean: true,
          texto: "Debes iniciar sesión para realizar esta acción.",
        });
      });
  };

  return (
    <>
      <ModalAlerta
        visible={modalActive.boolean}
        setValue={setModalActive}
        texto={modalActive.texto}
      />

      <form onSubmit={publicarContenido}>
        <VistaPreviaConfiguracion
          setConseguirColorVistaPrevia={setConseguirColorVistaPrevia}
        />
        <Colores
          setConseguirColorVistaPrevia={setConseguirColorVistaPrevia}
          conseguirColorVistaPrevia={conseguirColorVistaPrevia}
        />

        <BoxBtn>
          <button type="submit">Publicar contenido</button>
        </BoxBtn>
      </form>
    </>
  );
};

export default Publicar;
