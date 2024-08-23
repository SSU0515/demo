import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import MiddleMotion from "./MiddleMotion";
import img from "../../asset/tecimg.png";

const Container = styled.div`
  width: 100vw;
  height: 130vh;
  overflow: hidden;
  position: relative;
`;

const Img = styled(motion.img)`
  position: absolute;
  top: 80px;
  left: 15vw;
  width: 70vw;
`;
// const Content1 = styled(motion.h3)`
//   position: absolute;
//   top: 800px;
//   left: 35px;
//   width: 50%;
//   text-align: center;
//   line-height: 40px;
//   font-size: 1.2vw;
//   color: #888;
// `;
// const Content2 = styled(motion.h3)`
//   position: absolute;
//   top: 800px;
//   right: 90px;
//   width: 50%;
//   text-align: center;
//   line-height: 40px;
//   font-size: 1.2vw;
//   color: #888;
// `;

function Middle() {
  return (
    <Container>
      <MiddleMotion />
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
      {/* <Content1
        initial={{ opacity: 0, y: -100 }}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: { delay: 0.3 },
        }}
      >
        I use the Singing To Singing technique <br />
        We can help you with personal cloning.
        <br /> 저는 Speech To Singing 기술로
        <br />
        개인 보컬 클로닝을 도와드려요.
      </Content1>
      <Content2
        initial={{ opacity: 0, y: -100 }}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: { delay: 0.3 },
        }}
      >
        I use the Singing To Singing technique <br />
        We can help you with personal cloning.
        <br /> 저는 Speech To Singing 기술로
        <br />
        개인 보컬 클로닝을 도와드려요.
      </Content2> */}
    </Container>
  );
}

export default Middle;
