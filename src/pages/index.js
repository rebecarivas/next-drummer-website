import React from "react";
import Image from "next/image";
import Head from "next/head";
import styled from "styled-components";
import HomeImage from "../../public/assets/Entrada.jpg";
import Youtube from "../Components/Home/youtube";
import Workshop from "../Components/Home/workshop";
import Gravacao from "../Components/Home/gravacao";

export async function getStaticProps() {
  return {
    props: {},
    revalidate: 31536000,
  };
}

function Home() {
  return (
    <>
      <Head>
        <title>Marcio Silva</title>
      </Head>
      <Main>
        <Image
          src={HomeImage}
          alt="Marcio Silva na bateria"
          priority
          style={{
            width: "100vw",
            height: "auto",
            filter: "grayscale(50%)",
          }}
        />
        <Workshop />
        <Youtube />
        <Gravacao />
      </Main>
    </>
  );
}
export default Home;
const Main = styled.main`
  width: 100%;
  height: auto;
  background-color: var(--black);
`;
