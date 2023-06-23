"use client";
import React, { useState, createContext } from "react";
import axios from "axios";

// Crea un nuevo contexto
const UseStateContext = createContext();

const UseStateProvider = ({ children }) => {
  const [email, setEmail] = useState("");
  const [contraseña, setContraseña] = useState("");
  const [confirmar, setConfirmar] = useState("");
  const [manejoDeError, setManejoDeError] = useState({
    boolean: false,
    texto: "",
  });

  const onChangeEmail = (e) => setEmail(e.target.value);
  const onChangeContraseña = (e) => setContraseña(e.target.value);
  const onChangesetConfirmar = (e) => setConfirmar(e.target.value);

  const onSubmitCrearCuenta = (e) => {
    e.preventDefault();

    axios
      .post(process.env.CREAR_CUENTA, {
        email: email,
        contraseña: contraseña,
        confirmar: confirmar,
      })
      .then((response) => {
        setManejoDeError({
          boolean: true,
          texto: 'Cuenta creada con exito'
        });
        console.log(response.data);
      })
      .catch((err) => {
        setManejoDeError({
          boolean: true,
          texto: "Email ya registrado",
        });
      });
  };

  const state = {
    email,
    contraseña,
    confirmar,
    onChangeEmail,
    onChangeContraseña,
    onChangesetConfirmar,
    onSubmitCrearCuenta,
    manejoDeError,
  };

  return (
    <UseStateContext.Provider value={state}>
      {children}
    </UseStateContext.Provider>
  );
};

export { UseStateProvider, UseStateContext };
