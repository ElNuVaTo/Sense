"use client";
import styled from "styled-components";
import ArrayColeccion from "@/utils/ArrayColeccion";
import Elemento from "./Elemento";

const Main = styled.section`
  display: grid;
  width: 95%;
  margin: 0 auto 50px auto;
  gap: 50px 0;
  grid-auto-flow: dense;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
`;

const MapDeColeccion = () => {
  return (
    <>
      <Main>
        {ArrayColeccion.map((item, key) => (
          <li key={key}>
            <Elemento item={item} />
          </li>
        ))}
      </Main>
    </>
  );
};

export default MapDeColeccion;
