"use client";
import { createContext, useState } from "react";
import tinycolor from "tinycolor2";

const ColorAleatorioContext = createContext();

const ColorAleatorioProvider = ({ children }) => {
  const [colorCuerpo, setColorCuerpo] = useState("#ffffff");
  const [colorNavegacion, setColorNavegacion] = useState("#fafafa");
  const [colorComponente, setColorComponente] = useState("#f5f5f5");
  const [colorBoton, setColorBoton] = useState("#444444");
  const [colorBotonHover, setColorBotonHover] = useState("#0f0f0f");

  const [colorLink, setColorLink] = useState("#000000");
  const [colorNombre, setColorNombre] = useState("#252525");
  const [colorDesc, setColorDesc] = useState("#303030");

  const onChangeColorCuerpo = (e) => setColorCuerpo(e.target.value);
  const onChangeColorNavegacion = (e) => setColorNavegacion(e.target.value);
  const onChangeColorComponente = (e) => setColorComponente(e.target.value);
  const onChangeColorBoton = (e) => setColorBoton(e.target.value);
  const onChangeColorBotonHover = (e) => setColorBotonHover(e.target.value);

  const onChangeLink = (e) => setColorLink(e.target.value);
  const onChangeColorNombre = (e) => setColorNombre(e.target.value);
  const onChangeColorDesc = (e) => setColorDesc(e.target.value);

  const generarColorAleatorio = () => {
    const tono = Math.floor(Math.random() * 361); // 0 - 360
    const saturacion = Math.floor(Math.random() * 31) + 10; // 10 - 40

    const temaOpciones = {
      Blanco: Math.floor(Math.random() * 11) + 80, // 80 y 90
      Negro: Math.floor(Math.random() * 11) + 10, // 10 y 20
    };

    const temaSeleccionado = Math.random() < 0.5 ? "Blanco" : "Negro";

    const resultado =
      temaSeleccionado === "Blanco" ? temaOpciones.Blanco : temaOpciones.Negro;

    const iluminacion = resultado;

    const cuerpo = tinycolor(`hsl(${tono}, ${saturacion}%, ${iluminacion}%)`);

    const baseMonochromatic = cuerpo.monochromatic();
    const navegacion = baseMonochromatic[4];
    const componente = baseMonochromatic[3];

    // De aca hacia abajo se maneja la
    // logica de los colores
    // complementarios

    const tonoComplementario = (tono + 180) % 360;
    const complementario = tinycolor(
      `hsl(${tonoComplementario}, ${saturacion}%, ${iluminacion}%)`
    );
    const secundarioMonochromatic = complementario.monochromatic();

    const boton = secundarioMonochromatic[3];
    const botonHover = secundarioMonochromatic[4];

    // Logica para lograr un buen
    // contraste con el texto
    // Verse bien en todo los colores

    const textoLink = tinycolor.mostReadable(navegacion, ["#000000", "#FFF"]);

    const textoNombre = tinycolor.mostReadable(componente, [
      "#252525",
      "#f6f6f6",
    ]);
    const textoDescripcion = tinycolor.mostReadable(componente, [
      "#303030",
      "#d7d7d7",
    ]);

    return {
      cuerpo,
      navegacion,
      componente,
      boton,
      botonHover,
      textoLink,
      textoNombre,
      textoDescripcion,
    };
  };

  const clickGenerarColorAleatorio = () => {
    const colorRandom = generarColorAleatorio();
    const {
      cuerpo,
      navegacion,
      componente,
      boton,
      botonHover,
      textoLink,
      textoNombre,
      textoDescripcion,
    } = colorRandom;

    // Guardar el valor en el estado
    setColorCuerpo(cuerpo.toHexString());
    setColorNavegacion(navegacion.toHexString());
    setColorComponente(componente.toHexString());

    setColorBoton(boton.toHexString());
    setColorBotonHover(botonHover.toHexString());

    setColorLink(textoLink.toHexString());
    setColorNombre(textoNombre.toHexString());
    setColorDesc(textoDescripcion.toHexString());
  };

  const value = {
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

    clickGenerarColorAleatorio,
  };

  return (
    <ColorAleatorioContext.Provider value={value}>
      {children}
    </ColorAleatorioContext.Provider>
  );
};

export { ColorAleatorioContext, ColorAleatorioProvider };
