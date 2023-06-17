"use client";
import React, { useState, createContext } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

// Crea un nuevo contexto
const UseStateContext = createContext();

const UseStateProvider = ({ children }) => {
  const router = useRouter()
  const [email, setEmail] = useState("");
  const [contraseña, setContraseña] = useState("");
  const [manejoDeError, setManejoDeError] = useState({
    boolean: false,
    texto: "",
  });

  const onChangeEmail = (e) => setEmail(e.target.value);
  const onChangeContraseña = (e) => setContraseña(e.target.value);

  const onSubmitIniciarSesion = (e) => {
    e.preventDefault();

    axios
      .post(process.env.INICIAR_SESION, {
        email: email,
        contraseña: contraseña,
      })
      .then((response) => {
        console.log(response);
        localStorage.setItem("Usuario", true);
        router.push("/");
      })
      .catch((error) => {
        setManejoDeError({
          boolean: true,
          texto: error.response,
        });
      });
  };

  const state = {
    email,
    contraseña,
    onChangeEmail,
    onChangeContraseña,
    onSubmitIniciarSesion,
    manejoDeError,
  };

  return (
    <UseStateContext.Provider value={state}>
      {children}
    </UseStateContext.Provider>
  );
};

export { UseStateProvider, UseStateContext };
