import styled from "styled-components";

const Label = styled.label`
  display: flex;
  flex-direction: column;
  max-width: 230px;
  width: 100%;
`;
const Input = styled.input`
  border: none;
  outline: none;
  background-color: var(--Principal-Monocromatico);
  border-radius: 2px;
  padding: 5px 6px;
  border: 1px solid transparent;
  letter-spacing: 4px;
  font-size: 17px;
  ::placeholder {
    font-size: 17px;
  }
  :focus {
    border: 1px solid var(--secundario);
  }
`;

const InputPassword = ({ htmlFor, placeHolder, value, onChange }) => {
  return (
    <>
      <Label htmlFor={htmlFor}>
        {htmlFor}
        <Input
          type="password"
          id={htmlFor}
          placeholder={placeHolder}
          value={value}
          onChange={onChange}
          required
        />
      </Label>
    </>
  );
};

export default InputPassword;
