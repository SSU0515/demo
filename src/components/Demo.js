import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 1400px;
  color: #fff;
  position: relative;
`;

const BgTitle = styled.h3`
  position: absolute;
  top: 60px;
  right: 30%;
  font-size: 13rem;
  font-weight: 900;
  color: #222;
  z-index: 0;
`;

const Title = styled.h2`
  position: absolute;
  top: 180px;
  left: 150px;
  font-size: 30px;
  z-index: 4;
`;

function Demo() {
  return (
    <Container>
      <BgTitle>Demo</BgTitle>
      <Title>Demo</Title>
    </Container>
  );
}

export default Demo;
