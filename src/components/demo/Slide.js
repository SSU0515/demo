import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import BoxContent from "./BoxContent";

const BoxBase = styled(motion.div)`
  position: absolute;
  top: 0;
  border-radius: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: left;
  width: ${(props) => (props.size === "large" ? "25vw" : "15vw")};
  height: ${(props) => (props.size === "large" ? "25vw" : "15vw")};
  z-index: 10; /* 슬라이드의 z-index를 10으로 설정하여 모달 아래에 위치하도록 합니다 */

  ${(props) =>
    props.size !== "large" &&
    `
      top: 10%;
      h2 {
        font-size: 25px;
      }
      p {
        font-size: 16px;
      }
      &::after {
        content: "";
        position: absolute;
        top: -10px;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(15, 15, 15, 0.8);
        border-radius: 100%;
        z-index: 0;
      }
    `};
`;

const Slide = ({ item, variants, custom, position, size, imgsize }) => {
  return (
    <BoxBase
      key={item.id}
      variants={variants}
      custom={custom}
      initial="initial"
      animate="visible"
      exit="exit"
      style={{ left: position }}
      size={size}
    >
      <BoxContent item={item} img={item.src} imgsize={imgsize} />
    </BoxBase>
  );
};

export default Slide;
