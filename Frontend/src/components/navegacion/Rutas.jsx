"use client";
import styled from "styled-components";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { useRef } from "react";

const BoxDrag = styled.div`
  width: 76%;
  padding: 0 15px;
  overflow: hidden;

  @media (min-width: 500px) {
    padding: 0;
    width: max-content;
  }
`;

const Href = styled(motion.ul)`
  display: flex;
  align-items: center;
  width: max-content;
  gap: 20px;
  height: 35px;
  padding: 0 20px;
  position: relative;
  a {
  }
`;
const AnimateSpan = styled(motion.div)`
  position: absolute;
  width: 1px;
  height: 1.3px;
  bottom: 0;
  left: 0;
  border-radius: 2px;
  background-color: var(--secundario-monocromatico);
`;
const variants = {
  initial: {
    opacity: 1,
    x: 0,
  },
  inicio: {
    opacity: 1,
    x: 15,
    width: 54,
  },
  explorar: {
    opacity: 1,
    x: 80,
    width: 78,
  },
  coleccion: {
    opacity: 1,
    x: 170,
    width: 90,
  },
  exit: {
    opacity: 1,
    y: 10,
    x: 100,
    with: 50,
    transition: {
      duration: 0.45,
    },
  },
};

const Rutas = () => {
  const params = usePathname();
  const dragRef = useRef();

  const Rutas = [
    { href: "/", children: "Inicio" },
    { href: "/explorar", children: "Explorar" },
    { href: "/coleccion", children: "Coleccion" },
  ];

  const cualAnimacionTieneQueHacer = () => {
    let animacionActual = "";

    params === "/" ? (animacionActual = "inicio") : null;
    params === "/explorar" ? (animacionActual = "explorar") : null;
    params === "/coleccion" ? (animacionActual = "coleccion") : null;

    params === "/iniciar-sesion" ? (animacionActual = "exit") : null;
    params === "/registrarse" ? (animacionActual = "exit") : null;

    return animacionActual;
  };

  return (
    <>
      <BoxDrag ref={dragRef}>
        <Href drag="x" dragElastic={false} dragConstraints={dragRef}>
          {Rutas.map((item, key) => (
            <li key={key}>
              <Link href={item.href} draggable={false}>
                {item.children}
              </Link>
            </li>
          ))}

          <AnimatePresence wait>
            <AnimateSpan
              variants={variants}
              animate={cualAnimacionTieneQueHacer}
              initial="initial"
              exit="exit"
            />
          </AnimatePresence>
        </Href>
      </BoxDrag>
    </>
  );
};

export default Rutas;
