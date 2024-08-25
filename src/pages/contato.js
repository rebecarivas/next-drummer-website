import React from "react";
import Head from "next/head.js";
import styled from "styled-components";
import Form from "../Components/Contato/Form.js";
import { FaFacebook, FaInstagram, FaYoutube, FaSpotify } from "react-icons/fa6";
import { useTranslation } from "react-i18next";

function Contato() {
  const { t, i18n } = useTranslation();

  return (
    <>
      <Head>
        <title>Marcio Silva - Contato</title>
      </Head>
      <Wrapper>
        <div className="container">
          <h1>{t("contato")}</h1>
          <Content>
            <div>
              <p>
                <span>{t("falar")}</span>
              </p>
              <p>{t("escreve")}</p>
              <p>{t("social")}</p>
              <Social>
                <a
                  href="https://www.facebook.com/marcio.silva.54966"
                  target="_blank"
                >
                  <FaFacebook size={30} />
                </a>
                <a
                  href="https://www.instagram.com/msdrum/?igshid=pbuk1pm1ofom"
                  target="_blank"
                >
                  <FaInstagram size={30} />
                </a>
                <a
                  href="https://open.spotify.com/user/marciosilvadrum"
                  target="_blank"
                >
                  <FaSpotify size={30} />
                </a>
                <a
                  href="https://www.youtube.com/@MarcioSilva-kh4oe/featured"
                  target="_blank"
                >
                  <FaYoutube size={30} />
                </a>
              </Social>
            </div>
            <Form />
          </Content>
        </div>
      </Wrapper>
    </>
  );
}
export default Contato;

const Wrapper = styled.main`
  padding-bottom: 30px;
  background-image: url("/assets/marciocontato.jpeg");
  background-size: cover;
  background-repeat: no-repeat;
`;
const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  span {
    font-weight: bold;
    color: var(--yellow);
    font-size: 2rem;
  }
  p {
    color: var(--gray);
    font-size: 1.7rem;
    margin-bottom: 15px;
    /* font-weight: bold; */
  }
  @media (max-width: 992px) {
    flex-direction: column;
    form {
      margin-top: 50px;
    }
  }
`;
const Social = styled.div`
  margin-top: 30px;
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
  svg {
    color: var(--gray);
  }
  a:hover {
    svg {
      color: var(--yellow);
    }
  }
`;
