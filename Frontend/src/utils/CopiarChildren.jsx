import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import styled from "styled-components";

const Box = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 4px 10px;
  border-radius: 2px;
  background-color: var(--Principal-Monocromatico);
  cursor: pointer;
  position: relative;
  user-select: none;

  p {
    width: max-content;
  }
`;
const Span = styled(motion.span)`
  pointer-events: none;
  position: absolute;
  bottom: 0;

  p {
    background-color: transparent;
    filter: opacity(60%);
  }
`;

const CopiarChildren = ({ className, text }) => {
  const [activo, setActivo] = useState(false);

  const animacionCopiar = () => setActivo(true);
  const copiarValor = () => navigator.clipboard.writeText(text);

  useEffect(() => {
    let timer;

    if (activo) {
      timer = setTimeout(() => {
        setActivo(false);
      }, 500);
    }

    return () => {
      clearTimeout(timer);
    };
  }, [activo]);

  return (
    <>
      <Box
        className={className}
        onClick={() => {
          animacionCopiar();
          copiarValor();
        }}
      >
        <p>{text}</p>

        <AnimatePresence>
          {activo && (
            <Span
              key="Copy"
              initial={{ opacity: 0, y: 0 }}
              animate={{ opacity: 1, y: "100%" }}
              exit={{ opacity: 0, y: "150%" }}
            >
              <p>{text}</p>
            </Span>
          )}
        </AnimatePresence>
      </Box>
    </>
  );
};

export default CopiarChildren;
