import { useRef, useEffect } from "react";
import styled from "styled-components";

const Main = styled.div`
  display: flex;
  width: 100%;
  max-width: 780px;
  flex-direction: column;
  margin: auto;
  border-radius: 10px;
  position: relative;
`;
const Box = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 450px;
  background-color: ${(props) => props.cuerpo};
  border-radius: 10px;
  overflow: hidden;
  user-select: none;
  cursor: url(https://icon-library.com/images/color-picker-icon/color-picker-icon-10.jpg),
    pointer;
`;
const Navegacion = styled.nav`
  width: 100%;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: right;
  padding: 0 15px;
  gap: 0 20px;
  background-color: ${(props) => props.navegacion};
  z-index: 2;
  button {
    color: ${(props) => props.textoLink};
    background-color: ${(props) => props.boton};
    padding: 3px 8px;
    border-radius: 5px;
    font-size: 16px;
    user-select: none;
    cursor: default;
    :hover {
      background-color: ${(props) => props.botonHover};
    }
  }
  p {
    color: ${(props) => props.textoLink};
    font-size: 18px;
    user-select: none;
  }
`;
const Perfil = styled.div`
  display: flex;
  background-color: ${(props) => props.componente};
  width: 100%;
  max-width: 350px;
  margin: auto;
`;
const BoxUsuario = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 130px;
  height: 130px;
  z-index: 1;
  img {
    object-fit: cover;
    width: 100%;
    height: 100%;
    cursor: default;
  }
`;
const BoxDescripcion = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 5px 10px;
  height: 130px;
  overflow: hidden;
  b {
    font-size: 16px;
    color: ${(props) => props.textoNombre};
    width: max-content;
    z-index: 2;
  }
  p {
    font-size: 15px;
    color: ${(props) => props.textoDescripcion};
    z-index: 2;
  }
`;

const VistaPrevia = ({
  cuerpo,
  navegacion,
  componente,
  boton,
  botonHover,
  textoLink,
  textoNombre,
  textoDescripcion,
  src,
  nombre,
  desc,

  setValue,
}) => {


  const elementRef = useRef(null);

  const handleClick = (event) => {
    const { clientX, clientY } = event;
    const element = document.elementFromPoint(clientX, clientY);
    const style = window.getComputedStyle(element);
    const backgroundColor = style.backgroundColor;

    console.log(backgroundColor);
  };

  return (
    <>
      <Main ref={elementRef} onClick={handleClick}>
        <Box cuerpo={cuerpo}>
          <Navegacion
            navegacion={navegacion}
            textoLink={textoLink}
            boton={boton}
            botonHover={botonHover}
          >
            <p>Inicio</p>
            <button type="button">Ingresar</button>
          </Navegacion>

          <Perfil componente={componente}>
            <BoxUsuario>
              <img src={src} alt="" />
            </BoxUsuario>

            <BoxDescripcion
              textoNombre={textoNombre}
              textoDescripcion={textoDescripcion}
            >
              <b>{nombre}</b>
              <p>{desc}</p>
            </BoxDescripcion>
          </Perfil>
        </Box>
      </Main>
    </>
  );
};

export default VistaPrevia;
