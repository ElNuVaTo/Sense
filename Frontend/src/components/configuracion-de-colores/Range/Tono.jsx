import styled from "styled-components";

const Label = styled.label`
  display: flex;
  width: max-content;
  align-items: center;
  justify-content: center;
  height: 30px;
  p {
    color: white;
    width: 50px;
    text-align: center;
  }
`;
const Input = styled.input`
  position: relative;
  z-index: 1;
  appearance: none;
  border-radius: 0.5em;
  background-color: rgba(0, 0, 0, 0.1);
  height: 5px;
  width: 300px;
  display: block;
  outline: none;
  margin: 4rem auto;
  transition: color 0.05s linear;
  background: linear-gradient(
    to right,
    hsl(0, ${(props) => props.saturacion}%, ${(props) => props.iluminacion}%),
    hsl(60, ${(props) => props.saturacion}%, ${(props) => props.iluminacion}%),
    hsl(120, ${(props) => props.saturacion}%, ${(props) => props.iluminacion}%),
    hsl(180, ${(props) => props.saturacion}%, ${(props) => props.iluminacion}%),
    hsl(240, ${(props) => props.saturacion}%, ${(props) => props.iluminacion}%),
    hsl(300, ${(props) => props.saturacion}%, ${(props) => props.iluminacion}%),
    hsl(360, ${(props) => props.saturacion}%, ${(props) => props.iluminacion}%)
  );
  &:focus {
    outline: none;
  }
  &:active,
  &:hover:active {
    cursor: grabbing;
    cursor: -webkit-grabbing;
  }
  &::-moz-range-track {
    appearance: none;
    opacity: 0;
    outline: none !important;
  }
  &::-ms-track {
    outline: none !important;
    appearance: none;
    opacity: 0;
  }

  &::-webkit-slider-thumb {
    height: 18px;
    width: 18px;
    border-radius: 2em;
    appearance: none;
    background: var(--secundario-monocromatico);
    cursor: pointer;
    cursor: move;
    cursor: grab;
    cursor: -webkit-grab;

    transition: border 0.1s ease-in-out, box-shadow 0.2s ease-in-out,
      transform 0.1s ease-in-out;
    box-shadow: 0 0.4em 1em rgba(0, 0, 0, 0.15);
    &:active,
    &:hover:active {
      cursor: grabbing;
      cursor: -webkit-grabbing;
      height: 15px;
      width: 15px;
      box-shadow: 0 0 1px rgba(0, 0, 0, 0.1);
    }
    &:hover {
      transform: scale(1.2);
      box-shadow: 0 5px 15px rgba(0, 0, 0, 0.15);
    }
  }
`;
const Number = styled.input`
  appearance: none;
  -webkit-appearance: none;
  background-color: var(--Principal-Monocromatico);
  width: 40px;
  padding: 2px 5px;
  border-radius: 3px;
  margin: auto 10px;

  /* Ocultar flechas en WebKit */
  &::-webkit-inner-spin-button,
  &::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;

const Tono = ({ value, onChange, saturacion, iluminacion }) => {
  return (
    <>
      <Label htmlFor="">
        <p>H</p>
        <Input
          type="range"
          min="0"
          max="360"
          value={value}
          onChange={onChange}
          saturacion={saturacion}
          iluminacion={iluminacion}
        />

        <Number
          type="number"
          min="0"
          max="360"
          value={value}
          onChange={onChange}
        />
      </Label>
    </>
  );
};

export default Tono;
