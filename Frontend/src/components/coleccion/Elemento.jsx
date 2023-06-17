import styled from "styled-components";

const Box = styled.a`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-decoration: none;
  color: black;
  background-color: var(--Principal-Monocromatico);
  border-radius: 5px;
  overflow: hidden;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  width: 300px;
  height: 380px;
  margin: auto;
`;

const Box_Image = styled.img`
  aspect-ratio: 16/9;
  object-fit: cover;
`;
const Informacion = styled.div`
  padding: 10px;
`;
const Elemento = ({ item }) => {
  const { href, src, name, desc } = item;

  return (
    <Box href={href} target="_blank" draggable={false}>
      <Box_Image src={src} alt={name} draggable={false} />
      <Informacion>
        <h2>{name}</h2>
        <p>{desc}</p>
      </Informacion>
    </Box>
  );
};

export default Elemento;
