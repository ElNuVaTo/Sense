"use client";
import styled from "styled-components";

import Opciones from "./Opciones";

const Main = styled.div`
  display: flex;
  width: 100%;
  max-width: 780px;
  flex-direction: column;
  margin: auto;
`;
const Box = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 450px;
  background-color: ${(props) => props.cuerpo};
  border-radius: 10px 10px 0 0;
  overflow: hidden;
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
  button {
    color: ${(props) => props.textoLink};
    background-color: ${(props) => props.boton};
    padding: 3px 8px;
    border-radius: 5px;
    font-size: 16px;
    user-select: none;
    :hover {
      background-color: ${(props) => props.botonHover};
    }
  }
  p {
    color: ${(props) =>
      props.textoLink === "#ffffff" ? "black" : props.textoLink};
    font-size: 18px;
    cursor: pointer;
    user-select: none;
  }
`;
const Box_Opciones = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 0 0 10px 10px;
  background: var(--Principal-Monocromatico);
  padding: 2px 10px;
  height: 40px;
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
  img {
    object-fit: cover;
    width: 100%;
    height: 100%;
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
  }
  p {
    font-size: 15px;
    color: ${(props) => props.textoDescripcion};
  }
`;

const VistaPrevia = ({
  Publicado,
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
  likes,
  id,
}) => {
  return (
    <>
      <Main>
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

        <Box_Opciones>
          <Opciones likes={likes} Publicado={Publicado} id={id} />
        </Box_Opciones>
      </Main>
    </>
  );
};

export default VistaPrevia;
