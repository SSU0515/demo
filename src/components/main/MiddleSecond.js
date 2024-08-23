import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import img from "../../asset/aivoice.png";
import moreBtn from "../../asset/moreBtn2.png";
import MiddleMotion2 from "./MiddleMotion2";

const Container = styled.div`
  width: 100vw;
  height: 1600px;
  padding-top: 200px;
  overflow: hidden;
  position: relative;
`;

const Img = styled(motion.img)`
  position: absolute;
  top: 80px;
  left: 0;
  width: 100%;
`;

const MoreBtn = styled(motion.img).attrs({
  whileHover: { rotate: 360 },
})`
  position: absolute;
  top: 950px;
  right: 45.2vw;
  width: 180px;
  z-index: 3;
`;

const MiddleSecond = () => {
  return (
    <Container>
      <Img
        initial={{ opacity: 0, y: -100 }}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: { delay: 0.3 },
        }}
        src={img}
        alt="img"
      />
      <a href="https://www.braindeck.net/services/">
        <MoreBtn
          initial={{ opacity: 0, y: -200 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: { delay: 0.3 },
          }}
          src={moreBtn}
          alt="moreBtn"
        />
      </a>
      <MiddleMotion2 />
    </Container>
  );
};

export default MiddleSecond;
