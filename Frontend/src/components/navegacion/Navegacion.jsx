"use client";
import styled from "styled-components";
import Rutas from "./Rutas";
import Usuario from "./Usuario";
import { useState, useEffect, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";

const Main = styled.nav`
  position: relative;
  margin-bottom: 50px;
`;
const Main_Box = styled.div`
  display: flex;
  align-items: center;
  justify-content: right;
  height: 55px;
  width: 100%;
  background-color: var(--Principal);
  position: relative;
  z-index: 15;
  gap: 15px;
`;
const Icono_Usuario = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  min-width: 55px;
  img {
    user-select: none;
    width: 35px;
    height: 35px;
    object-fit: cover;
    cursor: pointer;
    border-radius: 50%;
  }
  ::after {
    content: "";
    position: absolute;
    width: 1.5px;
    height: 90%;
    left: calc(-1px + -7.5px);
    border-radius: 2px;
    background-color: var(--secundario-monocromatico);
  }
`;

const Navegacion = () => {
  const imageUsuario = useRef();
  const menuUsuario = useRef();

  const [menuDesplegado, setMenuDesplegado] = useState(false);

  const menuToggle = () => setMenuDesplegado(!menuDesplegado);

  useEffect(() => {
    const clickFuera = (event) => {
      if (
        menuUsuario.current &&
        !menuUsuario.current.contains(event.target) &&
        imageUsuario.current &&
        !imageUsuario.current.contains(event.target)
      ) {
        setMenuDesplegado(false);
      }
    };

    if (menuDesplegado) {
      document.addEventListener("click", clickFuera);
    }

    return () => document.removeEventListener("click", clickFuera);
  }, [menuDesplegado]);

  return (
    <>
      <Main>
        <Main_Box>
          <Rutas />

          <Icono_Usuario>
            <motion.img
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.99 }}
              src="/iconos/Usuario.svg"
              alt=""
              onClick={menuToggle}
              ref={imageUsuario}
            />
          </Icono_Usuario>
        </Main_Box>

        <AnimatePresence>
          {menuDesplegado && <Usuario menuUsuario={menuUsuario} />}
        </AnimatePresence>
      </Main>
    </>
  );
};

export default Navegacion;
