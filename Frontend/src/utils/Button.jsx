import styled from "styled-components";

const Btn = styled.button`
  border: 1px solid var(--secundario);
  padding: 5px 10px;
  color: white;
  :hover {
    background-color: var(--secundario-monocromatico);
    p {color: black;}
  }
`;

const Button = ({ type, onClick, children }) => {
  return (
    <>
      <Btn type={type} onClick={onClick}>
        {children}
      </Btn>
    </>
  );
};

export default Button;
