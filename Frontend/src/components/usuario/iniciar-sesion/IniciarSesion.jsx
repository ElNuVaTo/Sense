"use client";
import { useContext } from "react";

import InputPassword from "../InputPassword";
import InputText from "../InputText";
import Button from "../Button";
import { UseStateContext } from "./UseState";
import styled from "styled-components";

const Formulario = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: auto;
  width: 300px;
  gap: 25px;
`;

const ModalError = styled.div`
  background-color: var(--Error);
  width: 260px;
  padding: 3px 15px;
`;

const IniciarSesion = () => {
  const {
    email,
    contraseña,
    onChangeEmail,
    onChangeContraseña,
    onSubmitIniciarSesion,
    manejoDeError,
  } = useContext(UseStateContext);

  console.log(manejoDeError);
  return (
    <>
      <Formulario onSubmit={onSubmitIniciarSesion}>
        <h1>Iniciar sesion</h1>

        {manejoDeError.boolean && (
          <ModalError>
            <p>{manejoDeError.texto}</p>
          </ModalError>
        )}

        <InputText
          htmlFor="Email"
          placeHolder="example@example.com"
          value={email}
          onChange={onChangeEmail}
        />
        <InputPassword
          htmlFor="Contraseña"
          placeHolder="●●●●●●●●"
          value={contraseña}
          onChange={onChangeContraseña}
        />

        <Button>Ingresar</Button>
      </Formulario>
    </>
  );
};

export default IniciarSesion;
