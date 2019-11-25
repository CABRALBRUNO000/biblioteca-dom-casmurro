import React from "react";
import styled from 'styled-components'
import Carros from '../../main/Carros'
/* import banner from '../../img/Banner.png'; */

export default function Home(){
  return(
    <Figure>
      <Section>
        {/* <img src={banner} alt='Banner' width='890' height='500' /> */}
       <Carros/> 
      </Section>
    </Figure>
  )
}

const Figure = styled.figure`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;

const Section = styled.section`
  margin: 10px;
  padding: 10px;
  width: 890px;
  height: 500px;
`;
