import React from "react";
import Head from "next/head.js";
import styled from "styled-components";
import HoverDisk from "../Components/Discografia/HoverDisk.js";
import Vereda from "../../public/assets/veredacaminho.png";
import Avista from "../../public/assets/avistadoponto.jpeg";
import Sandroni from "../../public/assets/sandroni.jpg";
import Oar from "../../public/assets/oar.jpg";
import Saracotia from "../../public/assets/saracotia.jpg";
import Fimde from "../../public/assets/fimdefeira.jpg";
import Sonoris from "../../public/assets/sonoris.jpg";
import Bandarra from "../../public/assets/bandarra.jpg";
import Perdigao from "../../public/assets/pauloperdigao.png";
import Forro from "../../public/assets/forroda.jpeg";
import Memorias from "../../public/assets/memorias.webp";
import Sereno from "../../public/assets/sereno.jpg";
import { useTranslation } from "react-i18next";

export async function getStaticProps() {
  return {
    props: {},
    revalidate: 31536000,
  };
}

function Discografia() {
  const { t, i18n } = useTranslation();

  return (
    <>
      <Head>
        <title>Marcio Silva - {t("Discografia")}</title>
      </Head>
      <Wrapper>
        <div className="container">
          <h1>{t("Discografia")}</h1>
          <Content>
            <div>
              <HoverDisk
                href="https://open.spotify.com/intl-pt/album/22NCsStp0dnpdnjiCesh6v"
                alt="Capa do disco Forró da Liberdade do Fim de Feira"
                src={Forro}
                text={["Fim de Feira", "Forró da Liberdade", "2023"]}
              />
            </div>
            <div>
              <HoverDisk
                href="https://open.spotify.com/intl-pt/album/5vdVnh50GoAZbf4MSnFkMq"
                alt="Capa do disco As memórias do capitão melancolia de André Mussalem"
                src={Memorias}
                text={[
                  "André Mussalém",
                  "As Memórias do Capitão Melancolia",
                  "2022",
                ]}
              />
            </div>
            <div>
              <HoverDisk
                href="https://open.spotify.com/intl-pt/album/3orbttgcdVTC69O1hE59FX"
                alt="Capa do disco Sereno de Rafael Marques"
                src={Sereno}
                text={["Rafael Marques", "Sereno", "2021"]}
              />
            </div>
            <div>
              <HoverDisk
                href="https://open.spotify.com/album/4GS4RPbVO6S6AZNkvCDu5o?si=zO_m7mReTTSNPdPduVtE1Q&utm_source=copy-link"
                alt="Capa do disco Vereda Caminho de Bruno Lins"
                src={Vereda}
                text={["Bruno Lins", "Vereda Caminho", "2018"]}
              />
            </div>
            <div>
              <HoverDisk
                href="https://open.spotify.com/album/2HJsngnrH17RhPbTkVG8FS?si=KK5GgHkCRYidQHclixfniA&utm_source=copy-link"
                alt="Capa di disco A Vista do Ponto do Saracotia"
                src={Avista}
                text={["Saracotia", "A Vista do Ponto", "2016"]}
              />
            </div>
            <div>
              <HoverDisk
                href="https://soundcloud.com/carlos-sandroni/sets/carlos-sandroni-sem-regresso"
                alt="Capa do disco Sem Regresso de Carlos Sandroni"
                src={Sandroni}
                text={["Carlos Sandroni", "Sem Regresso", "2015"]}
              />
            </div>
            <div>
              <HoverDisk
                href="https://open.spotify.com/album/6GQTgqynqRBSpfx5cupAYe?si=hBRtgexDSQCMHAOwutJGGg&utm_source=copy-link"
                alt="Capa do disco O Ar de Sergio Godoy"
                src={Oar}
                text={["Sergio Godoy", "O Ar", "2014"]}
              />
            </div>
            <div>
              <HoverDisk
                href="https://open.spotify.com/album/36wr33tOvnq9ewRsAP7i1f?si=GxOUY1TGQJCzBg8k5HMCYw&utm_source=copy-link"
                alt="Capa do disco Saracotia do trio Saracotia"
                src={Saracotia}
                text={["Saracotia", "Saracotia", "2012"]}
              />
            </div>
            <div>
              <HoverDisk
                href="https://open.spotify.com/album/1b9UvlO4BtZJc1SY5o8bt8?si=6lbkNDkrR-qZFI5W8Q__iw&utm_source=copy-link"
                alt="Capa do disco De Todo Jeito a Gente Apanha do Fim de Feira"
                src={Fimde}
                text={["Fim de Feira", "De Todo Jeito a Gente Apanha", "2012"]}
              />
            </div>
            <div>
              <HoverDisk
                href="https://open.spotify.com/album/5HIvluLQUUMmqzaQc21h9g?si=NOK1NcC_RViMUzzfdcjk7g&utm_source=copy-link"
                alt="Capa o disco Sonoris Fábrica do grupo Sonoris Fábrica"
                src={Sonoris}
                text={["Sonoris Fábrica", "Sonoris Fábrica", "2012"]}
              />
            </div>
            <div>
              <HoverDisk
                href="https://open.spotify.com/album/5zTwrXNMHuXD5nVx33O6X1?si=rA9Vr89dSdObqeRk2V01WQ&utm_source=copy-link"
                alt="Capa do disco Bandarra de Tibério Azul"
                src={Bandarra}
                text={["Tibério Azul", "Bandarra", "2011"]}
              />
            </div>
            <div>
              <HoverDisk
                href="https://open.spotify.com/album/1TSasfSfuIXq6wSZlOsZRr?si=s_bLGEa9Q22mJ6RctqCDVA&utm_source=copy-link"
                alt="Capa do disco No Capibaribe Também tem Maré de Paulo Perdigão"
                src={Perdigao}
                text={[
                  "Paulo Perdigão",
                  "No Capibaribe Também tem Maré",
                  "2010",
                ]}
              />
            </div>
          </Content>
        </div>
      </Wrapper>
    </>
  );
}
export default Discografia;

const Wrapper = styled.main`
  padding-top: 30px;
  background-color: var(--lightblack);
`;
const Content = styled.div`
  padding-top: 30px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 768px) {
    justify-content: center;
  }
`;
