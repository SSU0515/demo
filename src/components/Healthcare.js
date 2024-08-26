import React from "react";
import after from "../asset/after.mp4";
import before from "../asset/before.mp4";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 120vh;
  color: #fff;
  padding-top: 20%;
  position: relative;
`;

const BgTitle = styled.h3`
  position: absolute;
  top: 60px;
  right: 30%;
  font-size: 10vw;
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

const VideoBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Healthcare = () => {
  return (
    <Container>
      <BgTitle>Health Care</BgTitle>
      <Title>Health Care</Title>
      <VideoBox>
        <video src={before} controls />
        <video src={after} controls />
      </VideoBox>
    </Container>
  );
};

export default Healthcare;
