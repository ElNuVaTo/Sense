import { useEffect, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import styled from "styled-components";

const Main = styled(motion.div)`
  display: flex;
  position: fixed;
  align-items: center;
  text-align: center;
  height: 80px;
  width: 300px;
  bottom: 0;
  left: 0;
  background-color: var(--Modal);
  z-index: 5;
  padding: 15px 10px;
  p {
    color: white;
  }
`;
const Segundos = styled(motion.span)`
  position: absolute;
  background-color: var(--secundario-monocromatico);
  height: 5px;
  width: 100%;
  bottom: 0;
  left: 0;
`;

const variants = {
  initial: {
    x: "-100%",
  },
  animate: {
    x: "0",
  },
  exit: {
    x: "-100%",
  },
  segundosInitial: {
    opacity: 1,
  },
  segundosTransition: {
    width: 0,
    transition: {
      duration: 4,
      ease: "linear",
    },
  },
};
const ModalAlerta = ({ visible, setValue, texto }) => {
  const modalRef = useRef();
  useEffect(() => {
    let timerId;

    if (visible) {
      timerId = setTimeout(() => {
        setValue(false);
      }, 4000);
    }

    return () => {
      clearTimeout(timerId);
    };
  }, [visible]);

  return (
    <>
      <AnimatePresence>
        {visible && (
          <Main
            key="BoxModal"
            ref={modalRef}
            variants={variants}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            <p>{texto}</p>

            <Segundos
              key="Segundos"
              variants={variants}
              initial="segundosInitial"
              animate="segundosTransition"
            />
          </Main>
        )}
      </AnimatePresence>
    </>
  );
};

export default ModalAlerta;
