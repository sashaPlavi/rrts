import styled, { createGlobalStyle } from 'styled-components';

//@ts-ignore
import bgimage from './img/denys-nevozhai .jpg';

export const GlobalStyle = createGlobalStyle`
html{
  height:100%;

}
body{
  background-image:url(${bgimage});
  background-size:cover;
  margin:0;
  padding:0, 20px;
  display: flex;
  justify-content: center;
}
*{
  box-sizing: border-box;
}

`;
