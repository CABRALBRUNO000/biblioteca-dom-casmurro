import React from "react";
import styled from "styled-components";

export default function Contato() {
  return (
    <Section>
      <Form>
        <Div>
          <Pnom>Nome:</Pnom>
          <Imput type="text" name="nome" Pleaceholder="Nome" />
        </Div>

        <Div>
          <Pnom>E-mail:</Pnom>
          <Imput type="email" nome="email" />
        </Div>

        <Div>
          <Pnom>Cometários:</Pnom>
          <Textarea name="comentários" />
        </Div>

        <Div>
          <ImputBotao type="submit" name="enviar" value="Enviar" />
        </Div>

        <Div>
          <ImputBotao type="reset" name="reset" value="apagar" />
        </Div>
      </Form>
    </Section>
  );
}
const Section = styled.section`
  display: flex;
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #263640;

  min-width: 100vw;
`;
const Imput = styled.input`
  display: block;
  align-items: center;
  margin-left: 0.625rem;
  min-width: 60vw;
  background-color: #263640;
  border: solid 1px #bfbcba;
  margin-left: 0, 625rem;
  padding: 0.625rem;
  color: #c7c7c7;
`;

const Textarea = styled.textarea`
  display: block;
  align-items: center;
  min-height: 30vh;
  margin-left: 0.625rem;
  min-width: 60vw;
  background-color: #263640;
  border: solid 1px #c7c7c7;
  margin-left: 0, 625rem;
  padding: 0.625rem;
`;
const ImputBotao = styled.input`
  display: block;
  align-items: center;
  min-height: 1vh;
  min-width: 15vw;
  background-color: #358c74;
  border: solid 1px #358c74;
  padding: 0.625rem;
  cursor: pointer;
`;

const Div = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin: 1rem;
  padding: 1rem;
`;
const Pnom = styled.p`
  color: #c7c7c7;
`;
