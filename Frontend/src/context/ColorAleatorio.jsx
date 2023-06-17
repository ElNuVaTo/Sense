'use client';

import { createContext, useState } from "react";

const ColorAleatorioContext = createContext();

const ColorAleatorioProvider = ({ children }) => {
  const [color, setColor] = useState("");

  return (
    <ColorAleatorioContext.Provider value={{ color, setColor }}>
      {children}
    </ColorAleatorioContext.Provider>
  );
};

export { ColorAleatorioContext, ColorAleatorioProvider };
