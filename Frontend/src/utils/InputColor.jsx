import styled from "styled-components";

const Label = styled.label`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: max-content;
  margin: 0 auto;
  p {
    color: #ffffff;
  }
`;
const Input = styled.input`
  height: 100px;
  width: 100px;
  border: none;
  outline: none;
  border-radius: 2px;
  appearance: none;
  background-image: none;
  background-color: transparent;
  -webkit-box-shadow: none;
  -moz-box-shadow: none;
  box-shadow: none;
`;
const InputColor = ({ htmlFor, onChange, value }) => {
  return (
    <>
      <Label htmlFor={htmlFor}>
        {htmlFor}
        <Input type="color" onChange={onChange} value={value} />
        <p>{value}</p>
      </Label>
    </>
  );
};

export default InputColor;
