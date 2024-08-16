import styled from "styled-components";
import Image from "next/image";

function HoverDisk({ href, src, alt, text }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer">
      <HoverContainer>
        <ImageWrapper>
          <Image src={src} alt={alt} />
        </ImageWrapper>
        <HoverText>
          {text.map((line, index) => (
            <p key={index}>{line}</p>
          ))}
        </HoverText>
      </HoverContainer>
    </a>
  );
}

export default HoverDisk;
const HoverText = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.5);
  color: var(--gray);
  font-weight: bold;
  opacity: 0;
  transition: opacity 0.3s ease;
  text-align: center;

  &:hover {
    opacity: 1;
  }

  p {
    margin: 0.2em 0;
  }
`;
const HoverContainer = styled.div`
  position: relative;
  display: inline-block;
  cursor: pointer;
  margin-bottom: 30px;
  &:hover ${HoverText} {
    opacity: 1;
  }
`;
const ImageWrapper = styled.div`
  position: relative;
  overflow: hidden;
  img {
    width: 300px;
    height: 300px;
  }
`;
