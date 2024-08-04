import Link from "next";
import { Wrapper } from "./styles.js";
import { Container } from "react-bootstrap";
function Menu() {
  return (
    <Container>
      <Wrapper id="cabecalho">
        <nav class="barra">
          <nav class="logo">
            <a class="botao" href="#Home">
              Marcio<strong>Silva</strong>
            </a>
          </nav>
          <ul class="menu">
            <li class="lista1">
              <a class="botao" href="#Home">
                Home
              </a>
            </li>
            <li class="lista1">
              <a class="botao" href="#Bio">
                Bio
              </a>
            </li>
            <li class="lista1">
              <a class="botao" href="#Discografia">
                Discografia
              </a>
            </li>
            <li class="lista1">
              <a class="botao" href="#Composicoes">
                Composições
              </a>
            </li>
            <li class="lista1">
              <a class="botao" href="#Galeria">
                Galeria
              </a>
            </li>
            <li class="lista1">
              <a class="botao" href="#Agenda">
                Agenda
              </a>
            </li>
            <li class="lista1">
              <a class="botao" href="#Contato">
                Contato
              </a>
            </li>
          </ul>
        </nav>
      </Wrapper>
    </Container>
  );
}
export default Menu;
