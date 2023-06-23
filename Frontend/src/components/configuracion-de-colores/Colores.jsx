"use client";
import { useContext, useState } from "react";
import styled from "styled-components";
import tinycolor from "tinycolor2";

import { ColorAleatorioContext } from "@/context/ConseguirColorAleatorio";
import Tono from "./Range/Tono";
import Saturacion from "./Range/Saturacion";
import Iluminacion from "./Range/Iluminacion";
import CopiarChildren from "@/utils/CopiarChildren";

const Main = styled.div`
  margin: 55px auto;
  display: flex;
  justify-content: right;
  max-width: 1100px;
  width: 95%;
  margin: 55px auto;
`;
const Box = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: right;
`;
const Box_Box = styled.div`
  display: flex;
  width: max-content;
  justify-content: right;
  margin-left: auto;
`;
const PanelDeControlHSL = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 25px;
  width: 100%;
  max-width: 500px;
`;
const ValueColorString = styled.div`
  display: flex;
  width: max-content;
  margin-left: auto;
  padding: 25px 10px;
  gap: 15px;
  p {
    padding: 4px 15px;
    border-radius: 2px;
    background-color: var(--Principal-Monocromatico);
  }
  .HEX {
    width: 110px;
    text-align: center;
  }
  .HSL {
    width: 220px;
    text-align: center;
  }
  .HSV {
    width: 230px;
    text-align: center;
  }
  .RGB {
    width: 200px;
    text-align: center;
  }
`;
const CuadradoColor = styled.div`
  min-height: 140px;
  min-width: 140px;
  background-color: ${(props) => props.color};
`;

const Colores = ({
  setConseguirColorVistaPrevia,
  conseguirColorVistaPrevia,
}) => {
  const [tono, setTono] = useState(0);
  const [saturacion, setSaturacion] = useState(100);
  const [iluminacion, setIluminacion] = useState(50);

  let ColorActual = tinycolor(`hsl(${tono}, ${saturacion}%, ${iluminacion}%)`);

  const ActualizarValor = () =>
    setConseguirColorVistaPrevia(
      tinycolor(`hsl(${tono}, ${saturacion}%, ${iluminacion}%)`)
    );

  const HEX = ColorActual.toHexString();
  const HSL = ColorActual.toHslString();
  const RGB = ColorActual.toRgbString();
  const HSV = ColorActual.toHsvString();

  const onChangeTono = (e) => setTono(e.target.value);
  const onChangeSaturacion = (e) => setSaturacion(e.target.value);
  const onChangeIluminacion = (e) => setIluminacion(e.target.value);

  const {
    colorCuerpo,
    colorNavegacion,
    colorComponente,
    colorBoton,
    colorBotonHover,
    colorLink,
    colorNombre,
    colorDesc,
    onChangeColorCuerpo,
    onChangeColorNavegacion,
    onChangeColorComponente,
    onChangeColorBoton,
    onChangeColorBotonHover,
    onChangeLink,
    onChangeColorNombre,
    onChangeColorDesc,
  } = useContext(ColorAleatorioContext);

  return (
    <>
      <Main>
        <Box>
          <Box_Box>
            <CuadradoColor
              color={
                conseguirColorVistaPrevia === undefined ||
                conseguirColorVistaPrevia === null
                  ? ColorActual
                  : conseguirColorVistaPrevia
              }
            ></CuadradoColor>

            <PanelDeControlHSL>
              <Tono
                value={tono}
                onChange={onChangeTono}
                saturacion={saturacion}
                iluminacion={iluminacion}
              />
              <Saturacion
                value={saturacion}
                onChange={onChangeSaturacion}
                tono={tono}
                iluminacion={iluminacion}
              />
              <Iluminacion
                value={iluminacion}
                onChange={onChangeIluminacion}
                tono={tono}
                saturacion={saturacion}
              />
            </PanelDeControlHSL>
          </Box_Box>
          <ValueColorString>
            <CopiarChildren text={HEX} className="HEX" />
            <CopiarChildren text={HSL} className="HSL" />
            <CopiarChildren text={HSV} className="HSV" />
            <CopiarChildren text={RGB} className="RGB" />
          </ValueColorString>
        </Box>
      </Main>
    </>
  );
};

export default Colores;
