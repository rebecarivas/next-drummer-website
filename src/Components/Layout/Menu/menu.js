import React, { useState } from "react";
import { styled } from "styled-components";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import "../../../../i18n.js";
import Image from "next/image.js";
import brFlag from "../../../../public/assets/flag-br.png";
import enFlag from "../../../../public/assets/flag-en.png";

function Menu() {
  const [classOn, setClassOn] = useState(false);
  const { t, i18n } = useTranslation();
  const [currentLang, setCurrentLang] = useState(i18n.language);

  const changeLanguage = () => {
    const newLang = currentLang === "en" ? "pt" : "en";
    i18n.changeLanguage(newLang);
    setCurrentLang(newLang);
  };
  return (
    <Wrapper>
      <div className="container">
        <LogoLink href="/">
          Marcio<strong>Silva</strong>
        </LogoLink>

        <MenuContent className={classOn ? "menu-section-on" : "menu-section"}>
          <MenuToggle onClick={() => setClassOn(!classOn)}>
            <div className="one"></div>
            <div className="two"></div>
            <div className="three"></div>
          </MenuToggle>
          <Nav>
            <MenuLink href="/">Home</MenuLink>
            <MenuLink href="bio">Bio</MenuLink>
            <MenuLink href="composicao">{t("composições")}</MenuLink>
            <MenuLink href="discografia">{t("Discografia")}</MenuLink>
            <MenuLink href="galeria">{t("Galeria")}</MenuLink>
            <MenuLink href="contato">{t("contato")}</MenuLink>
            <button onClick={changeLanguage}>
              <Image
                src={currentLang === "en" ? brFlag : enFlag}
                alt={`${t("troca")} ${currentLang === "en" ? "português" : "inglês"}`}
                width={20}
                height="auto"
              />
            </button>
          </Nav>
        </MenuContent>
      </div>
    </Wrapper>
  );
}
export default Menu;

const Wrapper = styled.header`
  background-color: var(--black);
  padding-top: 30px;
  padding-bottom: 30px;
  z-index: 1000;
  //separa a logo do menu
  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  @media (max-width: 1200px) {
    .menu-section {
      nav {
        display: none;
      }
    }
  }
  .menu-section-on {
    background: var(--black);
    z-index: 10;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .menu-section-on .one {
    transform: rotate(45deg) translate(7px, 7px);
    background-color: var(--gray);
  }

  .menu-section-on .two {
    opacity: 0;
  }

  .menu-section-on .three {
    transform: rotate(-45deg) translate(8px, -9px);
    background-color: var(--gray);
  }
`;
const MenuLink = styled(Link)`
  color: var(--gray);
  padding-bottom: 5px;
  margin-right: 15px;
  font-size: 1.3rem;
  transition: all 250ms linear 0s;
  &:visited {
    color: var(--gray);
  }
  &:hover {
    color: var(--yellow);
    border-bottom: 3px solid var(--yellow);
  }
`;

const LogoLink = styled(Link)`
  color: var(--yellow);
  padding-bottom: 5px;
  &:visited {
    color: var(--yellow);
  }
  font-size: 2rem;
  @media (max-width: 576px) {
    font-size: 1.7rem;
  }
`;
const MenuContent = styled.div``;
const MenuToggle = styled.div`
  width: 40px;
  height: 30px;
  margin-right: 20px;
  .one,
  .two,
  .three {
    background-color: var(--gray);
    height: 5px;
    width: 100%;
    margin: 6px auto;
    transition-duration: 0.3s;
    cursor: pointer;
  }
  @media (max-width: 576px) {
    width: 30px;
    height: 20px;
  }
  @media (min-width: 1200px) {
    display: none;
  }
`;

const Nav = styled.nav`
  display: flex;
  align-items: center;
  // animation: scale-in-ver-top 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;

  // @keyframes scale-in-ver-top {
  //   0% {
  //     transform: scaleY(0);
  //     transform-origin: 100% 0%;
  //     opacity: 1;
  //   }
  //   100% {
  //     transform: scaleY(1);
  //     transform-origin: 100% 0%;
  //     opacity: 1;
  //   }
  // }
  button {
    background-color: transparent;
    border: none;
  }

  @media (max-width: 1200px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 15px;
    position: absolute;
    top: 12vh;
    right: 0;
    width: 60vw;
    height: 50vh;
    background: var(--black);
    opacity: 0.9;
    transition: transform 0.3s ease-in;
  }
`;
