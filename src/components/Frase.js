import React from "react";
import styled from "@emotion/styled";

const ContenerdorFrase = styled.div`
  padding: 3rem;
  border-radius: 0.5rem;
  background-color: #fff;
  max-width: 800px;
  @media (min-width: 992px) {
    margin-top: 10rem;
  }

  h1 {
    font-family: Arial, Helvetica, sans-serif;
    text-align: center;
    position: relative;
    padding-left: 4rem;
    &::before{
      content: open-quote;
      color:black;
      position: absolute;
      left: -1rem;
      top:-2rem;
    }
  }

  p{
    font-family: Verdena, Geneva, Tahoma, sanf-serif;
    font-size: 1.6rem;
    text-align: center;
    color: #666;
    margin-top: 2rem;
    font-weight:bold;

  }
`;
const Frase = ({ frase }) => {

  return (
    <ContenerdorFrase>
      <h1>{frase.quote}</h1>
      <p>{frase.author}</p>
    </ContenerdorFrase>
  );
};

export default Frase;
