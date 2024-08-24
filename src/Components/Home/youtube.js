import React from "react";
import styled from "styled-components";

function Youtube() {
  return (
    <Wrapper>
      <div
        className="container"
        style={{ paddingBottom: "50px", paddingTop: "50px" }}
      >
        <iframe
          width="100%"
          height="500"
          src="https://www.youtube.com/embed/CLK_rZRG7fw?si=uUHahqyelIoXHKcp"
          title="Grupo Shark Punk tocando Ílhavo."
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
          sandbox
        />
      </div>
    </Wrapper>
  );
}

export default Youtube;
const Wrapper = styled.div`
  background-color: var(--lightblack);
  padding-top: 30px;
  padding-bottom: 30px;
  margin-top: -5px;
`;
