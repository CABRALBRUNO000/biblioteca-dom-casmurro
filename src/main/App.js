import React from "react";
import styled from "styled-components";
import Cabecalho from "./Cabecalho";
import Rodape from './Rodape'
import { BrowserRouter } from "react-router-dom";
import Routes from "./Routes";

export default function App() {
  return (
    <BrowserRouter>
      <Corpo>
        <Cabecalho />
        <Home />
        <Routes />
        <Rodape/>
      </Corpo>
    </BrowserRouter>
  );
}

const Corpo = styled.body`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  height: 100%;
  background-color: turquoise;
`;
const Home = styled.main``;
