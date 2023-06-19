import styled from "styled-components";

const Label = styled.label`
  display: flex;
  flex-direction: column;
  max-width: 230px;
  width: 100%;
`;
const TextArea = styled.textarea`
  border: none;
  outline: none;
  background-color: var(--Principal-Monocromatico);
  border-radius: 2px;
  padding: 5px 6px;
  border: 1px solid transparent;
  resize: none;
  overflow: hidden;
  :focus {
    border: 1px solid var(--secundario);
  }
`;

const InputAreaTexto = ({ htmlFor, placeHolder, value, onChange }) => {
  return (
    <>
      <Label htmlFor={htmlFor}>
        {htmlFor}
        <TextArea
          name=""
          cols="30"
          rows="5"
          id={htmlFor}
          placeholder={placeHolder}
          value={value}
          onChange={onChange}
        ></TextArea>
      </Label>
    </>
  );
};

export default InputAreaTexto;
