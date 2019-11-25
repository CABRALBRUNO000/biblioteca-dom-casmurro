import React from "react";
import styled from "styled-components";

export default function Rodape() {
  return (
    <RodapeLists>
      <Rod>
        <h1>Livros</h1>
        <ul>
          <Li>Livros de Artes</Li>
          <Li>Livros de Ciências</Li>
          <Li>Livros Didáticos </Li>
          <Li>Livros Humanidades </Li>
          <Li>Livros de Literatura e Ficção</Li>
          <Li>Livros de Idiomas e Referência </Li>
        </ul>
      </Rod>

      <Rod1>
        <h1>DVDs e Blu-Rays</h1>
        <ul>
          <Li1>Filmes</Li1>
          <Li1>Infantil</Li1>
          <Li1>Séries </Li1>
          <Li1>Documentários </Li1>
          <Li1>Lançamentos de DVDs</Li1>
          <Li1>Shows e Apresentações </Li1>
        </ul>
      </Rod1>
      <Rod2>
        <h1>Pesquise</h1>
        <ul>
          <Li2>Eventos</Li2>
          <Li2>Doe Livros</Li2>
          <Li2>Bibliotecas </Li2>
          <Li2>Livros em Ofertas </Li2>
          <Li2>Os Grandes Autores</Li2>
          <Li2>Autores Mais Vendidos</Li2>
        </ul>
      </Rod2>
    </RodapeLists>
  );
}

const RodapeLists = styled.footer`
  background: #c9f;
  display: flex;
  flex-wrap:wrap;
  width: 100%;
  justify-content:space-around;

`;

const Rod = styled.footer`
display:flex;
flex-direction:column;
padding:20px;
`;

const Rod1 = styled.footer`
display:flex;
flex-direction:column;
align-items:center;
padding:20px;
`;


const Rod2 = styled.footer`
display:flex;
flex-direction:column;
align-items:flex-end;
padding:20px;
`;

const Li = styled.li`
  padding:10px;
`;
const Li1 = styled.li`
  padding:10px;
  display:flex;
  justify-content:center;
`;
const Li2 = styled.li`
  padding:10px;
  display:flex;
  justify-content:flex-end;
`;