import styled from "styled-components";
import Link from "next/link";
import { motion } from "framer-motion";

const Href = styled(motion.ul)`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: max-content;
  width: 300px;
  right: 0;
  z-index: 14;
  background-color: var(--Principal);
  padding: 10px 0px;
  li {
    position: relative;
    display: flex;
    align-items: center;
    text-align: center;
    width: 50%;
    margin: 10px;
    outline: 1px solid var(--secundario);
    overflow: hidden;
    border-radius: 2px;
    ::after {
      content: "";
      position: absolute;
      height: 100%;
      left: -50%;
      width: 50%;
      background: var(--secundario-monocromatico);
      transition: ease-in-out 0.35s;
    }
    ::before {
      content: "";
      position: absolute;
      height: 100%;
      right: -50%;
      width: 50%;
      background: var(--secundario-monocromatico);
      transition: ease-in-out 0.35s;
    }
    :hover::after {
      left: 0;
    }
    :hover::before {
      right: 0;
    }
    :hover a {
      color: black;
    }
  }
  a {
    width: 100%;
    height: 100%;
    padding: 3px 5px;
    z-index: 2;
    transition: color linear 0.45s;
  }

  @media (max-width: 370px) {
    width: 100%;
  }
`;

const Usuario = ({ menuUsuario }) => {
  const NoVerificado = [
    { href: "/iniciar-sesion", children: "Iniciar Sesion" },
    { href: "/registrarse", children: "Registrarse" },
  ];
  const Verificado = [
    { href: "/configuracion", children: "Configuracion" },
    { href: "/", children: "Cerrar Sesion" },
  ];

  return (
    <>
      <Href
        ref={menuUsuario}
        key="Navegacion"
        initial={{ y: "-100%" }}
        animate={{ y: 0 }}
        exit={{ y: "-100%" }}
        transition={{ duration: 0.35 }}
      >
        {localStorage.getItem("Usuario")
          ? Verificado.map((item, key) => (
              <li key={key}>
                <Link href={item.href} draggable={false}>
                  {item.children}
                </Link>
              </li>
            ))
          : NoVerificado.map((item, key) => (
              <li key={key}>
                <Link href={item.href} draggable={false}>
                  {item.children}
                </Link>
              </li>
            ))}
      </Href>
    </>
  );
};

export default Usuario;
