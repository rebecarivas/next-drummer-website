import styled from "styled-components";
import {
  FaEnvelope,
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaSpotify,
} from "react-icons/fa6";
import { useTranslation } from "react-i18next";

function Footer() {
  let year = new Date().getFullYear();
  const { t, i18n } = useTranslation();

  return (
    <>
      <Wrapper>
        <div className="container">
          <div>
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
              href="https://www.youtube.com/@MarcioSilva-kh4oe/featured"
              target="_blank"
            >
              <FaYoutube size={30} />
            </a>
            <a
              href="https://open.spotify.com/user/marciosilvadrum"
              target="_blank"
            >
              <FaSpotify size={30} />
            </a>
            <a href="mailto:contatomarciosilvadrum@gmail.com" target="_blank">
              <FaEnvelope size={30} />
            </a>
          </div>
          <p>©{year} - Marcio Silva</p>
        </div>
      </Wrapper>
      <End>
        <div className="container">
          <p>
            {t("Desenvolvimento")}
            <span>
              <a href="mailto:rebecarivas@gmail.com" target="_blank">
                Rebeca Rivas
              </a>
            </span>
          </p>
        </div>
      </End>
    </>
  );
}
export default Footer;

export const Wrapper = styled.footer`
  background-color: var(--black);
  padding-top: 20px;
  padding-bottom: 20px;
  svg {
    margin-right: 15px;
    margin-bottom: 15px;
  }
  p {
    color: var(--yellow);
  }
  svg {
    color: var(--gray);
  }
  a:hover {
    svg {
      color: var(--yellow);
    }
  }
`;
export const End = styled.div`
  background-color: var(--yellow);
  padding-top: 10px;
  padding-bottom: 10px;
  p {
    text-align: center;
    color: var(--black);
    font-size: 0.9rem;
  }
  a {
    color: var(--black);
    font-weight: bold;

    &:visited {
      color: var(--black);
    }
    &:hover {
      color: var(--lightblack);
    }
  }
`;
