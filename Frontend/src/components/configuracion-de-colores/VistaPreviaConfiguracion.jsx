"use client";
import styled from "styled-components";
import { useContext } from "react";

import InputTexto from "@/utils/InputTexto";
import VistaPrevia from "./VistaPrevia/VistaPrevia";
import InputAreaTexto from "@/utils/InputAreaTexto";
import Button from "@/utils/Button";
import { ColorAleatorioContext } from "@/context/ConseguirColorAleatorio";
import { UsuarioVistaPreviaContext } from "@/context/UsuarioVistaPrevia";

const Main = styled.section`
  display: flex;
  width: 95%;
  gap: 0 50px;
  max-width: 1100px;
  margin: auto;
`;
const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;
`;
const Box_Inputs = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  gap: 50px;
  height: 100%;
`;
const VistaPreviaConfiguracion = ({setConseguirColorVistaPrevia}) => {
  const {
    colorCuerpo,
    colorNavegacion,
    colorComponente,
    colorBoton,
    colorBotonHover,
    colorLink,
    colorNombre,
    colorDesc,
    clickGenerarColorAleatorio,
  } = useContext(ColorAleatorioContext);
  const { src, nombre, desc, onChangeSrc, onChangeNombre, onChangeDesc } =
    useContext(UsuarioVistaPreviaContext);


  return (
    <>
      <Main>
        <VistaPrevia
          cuerpo={colorCuerpo}
          navegacion={colorNavegacion}
          componente={colorComponente}
          boton={colorBoton}
          botonHover={colorBotonHover}
          textoLink={colorLink}
          textoNombre={colorNombre}
          textoDescripcion={colorDesc}
          src={src}
          nombre={nombre}
          desc={desc}
          setValue={setConseguirColorVistaPrevia}
        />

        <Box>
          <Box_Inputs>
            <InputTexto
              htmlFor="URL Imagen"
              placeHolder="https://www.google.com/url?sa=i&url=https%3A%2F%2Far.pinterest.com%2Fpin%2F615445105322839132%2F&psig=AOvVaw2wTI2MiGRjab6mnCxc89-P&ust=1687220847021000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCNj-o82Jzv8CFQAAAAAdAAAAABAH"
              value={src}
              onChange={onChangeSrc}
            />
            <InputTexto
              htmlFor="Nombre"
              placeHolder="ElNuVaTo"
              value={nombre}
              onChange={onChangeNombre}
            />

            <InputAreaTexto
              htmlFor="Descripcion"
              placeHolder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do ad minim veniam, quis nostrud exercitation ullamco"
              value={desc}
              onChange={onChangeDesc}
            />
          </Box_Inputs>

          <Button type="button" onClick={clickGenerarColorAleatorio}>
            Generar colores
          </Button>
        </Box>
      </Main>
    </>
  );
};

export default VistaPreviaConfiguracion;
