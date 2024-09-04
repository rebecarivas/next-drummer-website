import React from "react";
import Link from "next/link";
import styled from "styled-components";
import { useTranslation } from "react-i18next";

function Gravacao() {
  const { t, i18n } = useTranslation();

  return (
    <Wrapper>
      <Container className="container">
        <p
          style={{
            color: "#fee180",
            fontSize: "2rem",
            paddingBottom: "20px",
            fontWeight: "bold",
          }}
        >
          {t("gravar")}
        </p>
        <p>{t("projeto")}</p>
        <p>{t("orçamento")}</p>
        {/* <p>Solicite um orçamento!</p> */}
        <Link href="/contato">{t("contratar")}</Link>
      </Container>
    </Wrapper>
  );
}

export default Gravacao;

const Wrapper = styled.div`
  background-image: url("/assets/gravacao3.jpg");
  background-attachment: fixed;
  background-size: cover;
  background-repeat: no-repeat;
  padding-top: 50px;
  padding-bottom: 50px;
  height: 75vh;

  p {
    color: var(--gray);
    font-size: 1.7rem;
  }
  a {
    background-color: var(--yellow);
    color: var(--black);
    font-weight: bold;
    font-size: 1.7rem;
    padding: 15px 30px;
    transition: 0.3s;
    margin-top: 30px;
  }
  a:hover {
    background-color: var(--black);
    color: var(--yellow);
  }
`;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;
