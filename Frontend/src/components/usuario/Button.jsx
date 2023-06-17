import React from "react";
import styled from "styled-components";

const Btn = styled.button`
  padding: 5px 10px;
  background-color: var(--secundario);
  color: #000000;
  border: none;
  border-radius: 2px;
  cursor: pointer;
  outline: 1px solid var(--secundario);
  outline-offset: -1px;
  transition: linear 0.25s;
  box-shadow: 0 0 3px 3px rgba(0, 0, 0, 0.1);
  &:hover {
    background-color: var(--secundario-monocromatico);
    outline: 1px solid var(--secundario-monocromatico);
    outline-offset: 3.5px;
  }
`;

const Button = ({ children }) => {
  return <Btn type="submit">{children}</Btn>;
};

export default Button;
