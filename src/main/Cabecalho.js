import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

export default function Cabecalho() {
  return (
    <Cabeca>
      <Logo>
        <Link to="/"> Livraria Dom Casmurro</Link>
      </Logo>
      <Navigation>
        <Link to="/">Home</Link>
      </Navigation>

      <Navigation>
        <Link to="/sobre">Sobre</Link>
      </Navigation>

      <Navigation>
        <Link to="/dicas">Dicas</Link>
      </Navigation>

      <Navigation>
        <Link to="/vendidos">Vendidos</Link>
      </Navigation>

      <Navigation>
        <Link to="/recomendados">Recomendados</Link>
      </Navigation>

      <Navigation>
        <Link to="/contato">Contato</Link>
      </Navigation>
    </Cabeca>
  );
}

const Cabeca = styled.header`
  display: flex;
   justify-content: center;
  background-color: #ccc;
  font-size: 1rem;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const Navigation = styled(Link)`
  margin: 10px;
  flex-grow: 1;
`;
const Logo = styled.h1`
  font-size: 1.5rem;
  padding: 10px;
  flex-grow: 2;
`;
