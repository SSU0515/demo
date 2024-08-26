import React from "react";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import styled from "styled-components";
import Slide from "./demo/Slide";

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

const BoxContainer = styled.div`
  width: 100vw;
  height: 600px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 35%;
  left: 0;
`;

const Buttons = styled.div`
  position: absolute;
  top: 50%;
  left: 25vw;
  width: 50vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 0;
`;

const Button = styled.button`
  border: none;
  background: none;
  color: #888;
  font-size: 40px;
  cursor: pointer;
  &:hover {
    color: #ff723a;
  }
`;

const boxVariants = {
  initial: (back) => ({
    x: back ? -500 : 500,
    opacity: 0,
    scale: 0.8,
  }),
  visible: {
    x: 0,
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.3,
    },
  },
  exit: (back) => ({
    x: back ? 500 : -500,
    opacity: 0,
    scale: 0.8,
    transition: {
      duration: 0.3,
    },
  }),
};

const data = [
  {
    id: 1,
    title: "1",
    src: "https://cdn.nbnnews.co.kr/news/photo/202209/704402_704559_2313.jpg",

    url: "https://www.youtube.com/watch?v=apHJTcD1psw",
  },
  {
    id: 2,
    title: "2",
    src: "https://cdn.nbnnews.co.kr/news/photo/202209/704402_704559_2313.jpg",
    url: "https://www.youtube.com/watch?v=apHJTcD1psw",
  },
  {
    id: 3,
    title: "3",
    src: "https://cdn.nbnnews.co.kr/news/photo/202209/704402_704559_2313.jpg",

    url: "https://www.youtube.com/watch?v=apHJTcD1psw",
  },
  {
    id: 4,
    title: "4",
    src: "https://cdn.nbnnews.co.kr/news/photo/202209/704402_704559_2313.jpg",

    url: "https://www.youtube.com/watch?v=apHJTcD1psw",
  },
  {
    id: 5,
    title: "5",
    src: "https://cdn.nbnnews.co.kr/news/photo/202209/704402_704559_2313.jpg",

    url: "https://www.youtube.com/watch?v=apHJTcD1psw",
  },
];

function Demo() {
  const [back, setBack] = useState(false);
  const [visible, setVisible] = useState(0);

  const nextBtn = () => {
    setBack(false);
    setVisible((prev) => (prev === data.length - 1 ? 0 : prev + 1));
  };

  const prevBtn = () => {
    setBack(true);
    setVisible((prev) => (prev === 0 ? data.length - 1 : prev - 1));
  };

  const prevIndex = visible === 0 ? data.length - 1 : visible - 1;
  const nextIndex = visible === data.length - 1 ? 0 : visible + 1;

  return (
    <Container>
      <BgTitle>Demo</BgTitle>
      <Title>Demo</Title>
      <BoxContainer>
        <AnimatePresence custom={back} mode="sync">
          {data.length > 0 && (
            <Slide
              key={`prev-${data[prevIndex].id}`}
              item={data[prevIndex]}
              img={data[prevIndex].src}
              variants={boxVariants}
              custom={back}
              position="3vw"
              size="small"
              imgsize="small"
            />
          )}
          {data.length > 0 && (
            <Slide
              key={data[visible].id}
              item={data[visible]}
              img={data[visible].src}
              variants={boxVariants}
              custom={back}
              position="calc(50% - 13.5vw)"
              size="large"
              imgsize="large"
            />
          )}
          {data.length > 0 && (
            <Slide
              key={`next-${data[nextIndex].id}`}
              item={data[nextIndex]}
              img={data[nextIndex].src}
              variants={boxVariants}
              custom={back}
              position="calc(100% - 18vw)"
              size="small"
              imgsize="small"
            />
          )}
        </AnimatePresence>
      </BoxContainer>
      <Buttons>
        <Button onClick={prevBtn}>◀</Button>
        <Button onClick={nextBtn}>▶</Button>
      </Buttons>
    </Container>
  );
}

export default Demo;
