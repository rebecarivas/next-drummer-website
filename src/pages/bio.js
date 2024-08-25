import React from "react";
import Head from "next/head";
import styled from "styled-components";
import Image from "next/image";
import BioImage from "../../public/assets/BIO.jpg";
import { useTranslation } from "react-i18next";

function Bio() {
  const { t, i18n } = useTranslation();

  return (
    <>
      <Head>
        <title>Marcio Silva - {t("bio")}</title>
      </Head>
      <Wrapper>
        <div className="container">
          <h1>{t("bio")}</h1>
          <Line>
            <TextBox>
              <p>{t("text")}</p>
            </TextBox>
            <ImageBox>
              <Image src={BioImage} style={{ width: "100%", height: "auto" }} />
            </ImageBox>
          </Line>
        </div>
      </Wrapper>
    </>
  );
}
export default Bio;

const Wrapper = styled.main`
  padding-top: 30px;
  background-color: var(--lightblack);
`;
const Line = styled.div`
  padding-top: 50px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;
const TextBox = styled.div`
  width: 500px;
  margin-right: 30px;
  margin-bottom: 30px;
  display: flex;
  align-items: center;
  p {
    color: var(--gray);
    font-size: 1.2rem;
    text-align: justify;
  }
`;
const ImageBox = styled.div`
  width: 500px;
  border: 6px solid var(--gray);
  margin-bottom: 30px;
`;
