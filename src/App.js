import React, { useState, useEffect } from "react";
import styled from "@emotion/styled";
import Frase from "./components/Frase";

const Button = styled.button`
  background: green;
  background-size: 300px;
  font-family: Arial, Helvetica, sans-serif;
  color: #fff;
  border: 2px solid black;
  margin-top: 3rem;
  padding: 1rem 3rem;
  font-size: 2rem;
  transition: background-size .8s ease;
  :hover{
    cursor:pointer;
    background-size:400;
  }
`;

const Contenedor = styled.div`
  display: flex;
  align-items: center;
  padding-top: 5rem;
  flex-direction: column;
`;

function App() {
  const [frase, obtenerFrase] = useState({});

  useEffect(() => {
    consultarApi();
  }, []);

  const consultarApi = async () => {
    const api = await fetch(
      "https://breaking-bad-quotes.herokuapp.com/v1/quotes"
    );
    const frase = await api.json();
    obtenerFrase(frase[0]);
  };
  return (
    <Contenedor>
      <Frase frase={frase} />
      <Button onClick={consultarApi}>Obtener Frase</Button>
    </Contenedor>
  );
}

export default App;
