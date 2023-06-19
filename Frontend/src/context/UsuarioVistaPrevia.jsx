"use client";

import { createContext, useState } from "react";

const UsuarioVistaPreviaContext = createContext();

const UsuarioVistaPreviaProvider = ({ children }) => {
  const defaultData = {
    src: "https://i.pinimg.com/originals/4a/7e/28/4a7e28348967f0fcad5c7f4385be1839.jpg",
    nombre: "ElNuVaTo",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do ad minim veniam, quis nostrud exercitation ullamco ",
  };

  const [src, setSrc] = useState(defaultData.src);
  const [nombre, setNombre] = useState(defaultData.nombre);
  const [desc, setDesc] = useState(defaultData.desc);

  const onChangeSrc = (e) => setSrc(e.target.value);
  const onChangeNombre = (e) => setNombre(e.target.value);
  const onChangeDesc = (e) => setDesc(e.target.value);

  const value = {
    src,
    nombre,
    desc,
    onChangeSrc,
    onChangeNombre,
    onChangeDesc,
  };

  return (
    <UsuarioVistaPreviaContext.Provider value={value}>
      {children}
    </UsuarioVistaPreviaContext.Provider>
  );
};

export { UsuarioVistaPreviaContext, UsuarioVistaPreviaProvider };
