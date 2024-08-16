import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
:root{
  --black: #181818;
  --lightblack: #202020;
  --gray: #d7d1c3;
  --yellow: #fee180;
}
*{
  margin:0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Montserrat', sans-serif;
}
.container,
.container-fluid {
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
}
@media (min-width: 576px) {
  .container {
    max-width: 540px !important;
  }
}
@media (min-width: 768px) {
  .container {
    max-width: 720px !important;
  }
}
@media (min-width: 992px) {
  .container {
    max-width: 960px !important;
  }
}
@media (min-width: 1200px) {
  .container {
    max-width: 1140px !important;
  }
} 
button{
    cursor: pointer;
}
a{
  text-decoration: none;
}
h1{
  color: var(--yellow);
  font-size: 2rem;
  margin-bottom: 30px;
  padding-top: 30px;
  @media (max-width: 576px){
    font-size: 1.7rem;
  }
}
`;

export default GlobalStyle;
