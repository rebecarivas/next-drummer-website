import styled from "styled-components";
import { useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";

function Workshop() {
  const { t, i18n } = useTranslation();
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate");
            entry.target.classList.remove("hidden");
          } else {
            entry.target.classList.remove("animate");
          }
        });
      },
      { threshold: 0.1 }, // Ajuste o valor conforme necessário
    );

    const elements = document.querySelectorAll(".hidden");
    elements.forEach((element) => observer.observe(element));
  }, []);

  return (
    <Wrapper>
      <div className="container">
        <p style={{ marginBottom: "70px", fontWeight: "bold" }}>
          {t("workshop")}
        </p>
        <BoxWrapper>
          <Box className="hidden">
            <p>{t("ritmos")}</p>
          </Box>
          <Box className="hidden">
            <p>{t("performance")}</p>
          </Box>
          <Box className="hidden">
            <p>{t("improvisação")}</p>
          </Box>
        </BoxWrapper>
      </div>
    </Wrapper>
  );
}

export default Workshop;
const Wrapper = styled.div`
  background-color: var(--yellow);
  padding-top: 50px;
  padding-bottom: 50px;
  height: 80vh;
  p {
    font-size: 2rem;
  }
  @media (max-width: 992px) {
    height: auto;
  }
`;
const BoxWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-top: 30px;
  /* Aplicando um delay de animação diferente para cada Box */
  &:nth-child(1) {
    transition-delay: 0.5s;
  }
  &:nth-child(2) {
    transition-delay: 1s;
  }
  &:nth-child(3) {
    transition-delay: 2s;
  }

  @media (max-width: 992px) {
    flex-direction: column;
    align-items: center;
  }
`;
const Box = styled.div`
  background-color: var(--lightblack);
  width: 250px;
  height: 250px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  border-radius: 50%;
  &.hidden {
    opacity: 0;
    filter: blur(2px);
    transform: translateX(-100%);
    transition: all 2s;
  }

  &.animate {
    opacity: 1;
    filter: blur(0);
    transform: translateX(0);
    transition: all 2s;
    /* animation: tilt-in-fwd-bl 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
    @keyframes tilt-in-fwd-bl {
      0% {
        transform: rotateY(-20deg) rotateX(-35deg) translate(-300px, 300px)
          skew(-35deg, 10deg);
        opacity: 0;
      }
      100% {
        transform: rotateY(0) rotateX(0deg) translate(0, 0) skew(0deg, 0deg);
        opacity: 1;
      }
    } */
  }

  p {
    color: var(--gray);
    font-size: 1.8rem;
  }
  @media (max-width: 992px) {
    margin-bottom: 30px;
    width: 200px;
    height: 200px;
    p {
      text-align: center;
      font-size: 1.5rem;
    }
  }
`;
