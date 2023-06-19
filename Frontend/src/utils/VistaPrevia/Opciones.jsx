import { useState } from "react";
import styled from "styled-components";

const Opciones = () => {
  return (
    <>
      <CambiarIcono
        inactivo="/iconos/CorazonOutline.svg"
        activo="/iconos/CorazonSolido.svg"
        tamaño="28px"
      />

      <CambiarIcono
        inactivo="/iconos/BookmarOutline.svg"
        activo="/iconos/BookmarkSolid.svg"
        tamaño="25px"
      />
    </>
  );
};

export default Opciones

const Icono = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    width: ${(props) => props.tamaño};
    height: ${(props) => props.tamaño};
    cursor: pointer;
    margin: auto;
    user-select: none;
  }
`;

const CambiarIcono = ({ inactivo, activo, tamaño }) => {
  const [corazonActivo, setCorazonActivo] = useState(inactivo);
  const darMegusta = () => {
    setCorazonActivo(corazonActivo === activo ? inactivo : activo);
  };

  return (
    <>
      <Icono onClick={darMegusta} tamaño={tamaño}>
        <img src={corazonActivo} alt="" draggable={false}/>
      </Icono>
    </>
  );
};
