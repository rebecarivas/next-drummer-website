import styled from "styled-components";
import HoverImage from "../Components/Galeria/HoverImage";
import MarcioSanta from "../../public/assets/MarcioSanta.jpg";
import Circular from "../../public/assets/circular.jpg";
import SaracaColombia from "../../public/assets/SaracotiaColombia2.jpg";
import Fimdefeira from "../../public/assets/fimde.jpg";
import Marciocolombia from "../../public/assets/marciocolombia.jpg";
import Marciovert from "../../public/assets/marciovert.jpg";
import Circular2 from "../../public/assets/circular2.jpg";
import Marcio2 from "../../public/assets/marcio2.jpg";
import Vasco from "../../public/assets/vasco.jpg";
import Brasil from "../../public/assets/brasil.jpg";
import { useTranslation } from "react-i18next";

function Galeria() {
  const { t, i18n } = useTranslation();

  return (
    <>
      <Wrapper>
        <div className="container">
          <h1>{t("Galeria")}</h1>
          <Content>
            <HoverImage
              src={MarcioSanta}
              alt={
                "Marcio Silva na bateria, Teatro Santa Izabel, Recife em 2015"
              }
              text={["Saracotia", "Teatro Santa Izabel - Recife", "2015"]}
            />
            <HoverImage
              src={Circular}
              alt={"Grupo Circular Caxangá no palco"}
              text={["Circular Caxangá", "Teatro Paiol - Curitiba", "2013"]}
            />
            <HoverImage
              src={SaracaColombia}
              alt={"Saracotia tocando na Colômbia"}
              text={["Saracotia", "Colômbia", "2014"]}
            />
            <HoverImage
              src={Fimdefeira}
              alt={"Grupo Fim de Feira"}
              text={["Fim de Feira", "Recife", "2014"]}
            />
            <HoverImage
              src={Marciocolombia}
              alt={"Marcio Silva tocando bateria na Colômbia"}
              text={["Saracotia", "Colômbia", "2014"]}
            />
            <HoverImage
              src={Marciovert}
              alt={"Marcio Silva tocando bateria"}
              text={["Saracotia", "Teatro Luiz Mendonça - Recife", "2012"]}
            />
            <HoverImage
              src={Circular2}
              alt={"Grupo Circular Caxangá"}
              text={[
                "Circular Caxangá",
                "Faculdade Souza Lima - São Paulo",
                "2013",
              ]}
            />
            <HoverImage
              src={Marcio2}
              alt={"Marcio Silva tocando bateria"}
              text={["Saracotia", "Teatro Santa Izabel - Recife", "2015"]}
            />
            <HoverImage
              src={Vasco}
              alt={"Marcio tocando bateria em Portugal"}
              text={["Aveiro - Portugal", "2015"]}
            />
            <HoverImage
              src={Brasil}
              alt={""}
              text={[
                "Circular Caxangá",
                "Faculdade Souza Lima - São Paulo",
                "2013",
              ]}
            />
          </Content>
        </div>
      </Wrapper>
    </>
  );
}
export default Galeria;

const Wrapper = styled.main`
  padding-top: 30px;
  padding-bottom: 30px;
  background-color: var(--lightblack);
`;
const Content = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  @media (max-width: 1200px) {
    justify-content: center;
  }
`;
