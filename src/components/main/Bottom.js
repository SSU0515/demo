import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import MiddleMotion from "./MiddleMotion";
import img from "../../asset/contact.png";
import logoBg from "../../asset/LogoMark.png";
import map from "../../asset/map.png";

const Container = styled.div`
  width: 100vw;
  height: 220vh;
  overflow: hidden;
  padding-top: 250px;
  position: relative;
`;

const Img = styled(motion.img)`
  position: absolute;
  top: 90vh;
  left: 15vw;
  width: 70vw;
`;
const Img2 = styled(motion.img)`
  position: absolute;
  top: 0;
  left: 35vw;
  width: 30vw;
`;
const Img3 = styled(motion.img)`
  position: absolute;
  bottom: 5vh;
  left: 20vw;
  width: 60vw;
`;

const Title = styled(motion.h2)`
  position: absolute;
  top: 20vh;
  left: 0;
  width: 100vw;
  font-size: 2.8vw;
  font-weight: 600;
  color: #fff;
  text-align: center;
`;
const MidTitle = styled(motion.h2)`
  position: absolute;
  top: 20vh;
  left: 0;
  width: 100vw;
  margin-top: 10vh;
  font-size: 1.5vw;
  font-weight: 400;
  color: #fff;
  text-align: center;
`;

function Bottom() {
  return (
    <Container>
      <MiddleMotion />
      <Img2 src={logoBg} alt="logoBg" />
      <Title
        initial={{ opacity: 0, x: -200 }}
        whileInView={{
          opacity: 1,
          x: 0,
          transition: { delay: 0.3 },
        }}
      >
        우리는 AI를 통해 인간의 커뮤니케이션을 돕습니다 .
      </Title>
      <MidTitle
        initial={{ opacity: 0, x: 200 }}
        whileInView={{
          opacity: 1,
          x: 0,
          transition: { delay: 0.3 },
        }}
      >
        "Empowering Human Connection: Enhancing Communication through AI"
      </MidTitle>
      <Img
        initial={{ opacity: 0, y: -200 }}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: { delay: 0.5 },
        }}
        src={img}
        alt="img"
      />
      <Img3 src={map} alt="map" />
    </Container>
  );
}

export default Bottom;
