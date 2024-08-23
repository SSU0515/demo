import React from "react";
import styled from "styled-components";

const TextWrap01 = styled.section`
  width: 100%;
  display: flex;

  align-items: center;
  /* border: 1px solid #00f; */
`;

const WhText = styled.p`
  height: 100px;
  font-size: 2.9vw;
  text-align: center;
  font-weight: 900;

  line-height: 110px;
  color: #fff;
  @media (max-width: 1270px) {
    font-size: 6vw;
  }
  @media (max-width: 600px) {
    font-size: 10vw;
    line-height: 100px;
  }
`;

const YgText = styled.p`
  height: 100px;
  font-size: 1vw;
  padding-right: 3.4vw;
  font-weight: 700;
  text-align: center;
  padding-left: 2vw;
  line-height: 110px;
  color: #ff723a;
  @media (max-width: 1270px) {
    font-size: 6vw;
  }
  @media (max-width: 600px) {
    font-size: 10vw;
    line-height: 100px;
  }
`;

const ScrollText = () => {
  return (
    <>
      <TextWrap01>
        <WhText>Voice Cloning</WhText>
        <YgText>음성 클로닝</YgText>

        <WhText>부정확한 발음 및 음성 개선</WhText>
        <YgText></YgText>

        <WhText>Deepfake Detection</WhText>

        <YgText>가상보컬 딥페이크 탐지</YgText>

        <WhText>Voice Cloning</WhText>
        <YgText>음성 클로닝</YgText>

        <WhText>부정확한 발음 및 음성 개선</WhText>
        <YgText></YgText>

        <WhText>Deepfake Detection</WhText>

        <YgText>가상보컬 딥페이크 탐지</YgText>
      </TextWrap01>
    </>
  );
};

export default ScrollText;
