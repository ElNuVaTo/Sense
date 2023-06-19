"use client";
import styled from "styled-components";
import InputColor from "@/utils/InputColor";
import { useContext } from "react";
import { ColorAleatorioContext } from "@/context/ConseguirColorAleatorio";


const Main = styled.div`
  margin: 55px auto;
`;
const Main_Fondo = styled.div`
  display: flex;
  margin: auto;
  width: 95%;
  max-width: 900px;
`;
const Main_Texto = styled.div`
  display: flex;
  margin: auto;
  width: 95%;
  max-width: 545px;
`;

const Colores = () => {
  const {
    colorCuerpo,
    colorNavegacion,
    colorComponente,
    colorBoton,
    colorBotonHover,
    colorLink,
    colorNombre,
    colorDesc,
    onChangeColorCuerpo,
    onChangeColorNavegacion,
    onChangeColorComponente,
    onChangeColorBoton,
    onChangeColorBotonHover,
    onChangeLink,
    onChangeColorNombre,
    onChangeColorDesc,
  } = useContext(ColorAleatorioContext);
  return (
    <>
      <Main>
        <Main_Fondo>
          <InputColor
            htmlFor="Cuerpo"
            value={colorCuerpo}
            onChange={onChangeColorCuerpo}
          />
          <InputColor
            htmlFor="Navegacion"
            value={colorNavegacion}
            onChange={onChangeColorNavegacion}
          />

          <InputColor
            htmlFor="Componente"
            value={colorComponente}
            onChange={onChangeColorComponente}
          />

          <InputColor
            htmlFor="Boton"
            value={colorBoton}
            onChange={onChangeColorBoton}
          />

          <InputColor
            htmlFor="Boton Hover"
            value={colorBotonHover}
            onChange={onChangeColorBotonHover}
          />
        </Main_Fondo>

        <Main_Texto>
          <InputColor
            htmlFor="Navegacion"
            value={colorLink}
            onChange={onChangeLink}
          />

          <InputColor
            htmlFor="Nombre"
            value={colorNombre}
            onChange={onChangeColorNombre}
          />

          <InputColor
            htmlFor="Descripcion"
            value={colorDesc}
            onChange={onChangeColorDesc}
          />
        </Main_Texto>
      </Main>
    </>
  );
};

export default Colores;
