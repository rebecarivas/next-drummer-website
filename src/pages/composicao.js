import React from "react";
import Head from "next/head";
import styled from "styled-components";
import { useTranslation } from "react-i18next";

export async function getStaticProps() {
  return {
    props: {},
    revalidate: 31536000,
  };
}

function Composicao() {
  const { t, i18n } = useTranslation();

  return (
    <>
      <Head>
        <title>Marcio Silva - {t("composições")}</title>
      </Head>
      <Wrapper>
        <div className="container">
          <h1>{t("composições")}</h1>
          <iframe
            src="https://open.spotify.com/embed/playlist/1nC7r8vyptSrkVuL8Glti2"
            title="Composições de Marcio Silva no Spotify"
            width="400"
            height="430"
            frameBorder="0"
            allowTransparency="true"
            allow="encrypted-media"
          ></iframe>
        </div>
      </Wrapper>
    </>
  );
}
export default Composicao;
const Wrapper = styled.main`
  padding-top: 30px;
  padding-bottom: 30px;
  background-image: url("/assets/composicao.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  @media (max-width: 576px) {
    iframe {
      width: 300px;
    }
  }
`;
