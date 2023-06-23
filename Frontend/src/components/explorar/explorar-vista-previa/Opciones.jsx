import { useState } from "react";
import styled from "styled-components";
import axios from "axios";

const Box = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;
const Corazon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    width: 28px;
    height: 28px;
    cursor: pointer;
    margin: auto;
    user-select: none;
  }
`;
const Guardar = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    width: 25px;
    height: 25px;
    cursor: pointer;
    margin: auto;
    user-select: none;
  }
`;

const Opciones = ({ likes, Publicado, id }) => {
  const [corazonActivo, setCorazonActivo] = useState(false);
  const [guardadoActivo, setGuardadoActivo] = useState(false);

  const onSubmitAgregarLike = async () => {
    setCorazonActivo(true);
    if (Publicado) {
      try {
        const response = await axios.patch(
          `http://localhost:3001/publicaciones/me-gusta/${id}`,
          {},
          {
            withCredentials: true,
          }
        );
        console.log(response.data);
      } catch (error) {
        console.error(error);
      }
    }
  };

  const quitarMegusta = async () => {
    setCorazonActivo(false);
    if (Publicado) {
      try {
        const response = await axios.delete(
          `http://localhost:3001/publicaciones/no-me-gusta//${id}`,
          {},
          {
            withCredentials: true,
          }
        );
        console.log(response.data);
      } catch (error) {
        console.error(error);
      }
    }
  };

  const guardarContenido = () => {
    setGuardadoActivo(true);
  };

  const quitarGuardado = () => {
    setGuardadoActivo(false);
  };

  return (
    <>
      <Box>
        {corazonActivo ? (
          <Corazon onClick={quitarMegusta}>
            <img
              src="/iconos/CorazonSolido.svg"
              alt="Corazon relleno que indica que esta activo"
              draggable={false}
            />
          </Corazon>
        ) : (
          <Corazon onClick={onSubmitAgregarLike}>
            <img
              src="/iconos/CorazonOutline.svg"
              alt="Borde de un corazon que indica que esta inactivo"
              draggable={false}
            />
          </Corazon>
        )}

        <p>{likes}</p>
      </Box>

      {guardadoActivo ? (
        <Guardar onClick={quitarGuardado}>
          <img
            src="/iconos/BookmarkSolid.svg"
            alt="Corazon relleno que indica que esta activo"
            draggable={false}
          />
        </Guardar>
      ) : (
        <Guardar onClick={guardarContenido}>
          <img
            src="/iconos/BookmarOutline.svg"
            alt="Borde de un corazon que indica que esta inactivo"
            draggable={false}
          />
        </Guardar>
      )}
    </>
  );
};

export default Opciones;
