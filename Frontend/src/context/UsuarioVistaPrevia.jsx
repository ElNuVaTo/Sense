'use client';

import { createContext, useState } from "react";

const UsuarioVistaPreviaContext = createContext();

const UsuarioVistaPreviaProvider = ({ children }) => {
  const [color, setColor] = useState("");

  return (
    <UsuarioVistaPreviaContext.Provider value={{ color, setColor }}>
      {children}
    </UsuarioVistaPreviaContext.Provider>
  );
};

export { UsuarioVistaPreviaContext, UsuarioVistaPreviaProvider };
