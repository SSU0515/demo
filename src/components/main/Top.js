import React, { useRef } from "react";
import styled from "styled-components";
import ScrollText from "./ScrollText";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import bg from "../../asset/Our Service.png";
import bg2 from "../../asset/Our Goal.png";
import moreBtn from "../../asset/moreBtn.png";
import TopMotion from "./TopMotion";
import { motion } from "framer-motion";

gsap.registerPlugin(ScrollTrigger);

const Container = styled.div`
  width: 100vw;
  height: 2000px;
  overflow: hidden;
  position: relative;
`;

const TopBg = styled(motion.img)`
  width: 100vw;
  position: absolute;
  top: 0;
  left: 0;
`;

const TopBg2 = styled(motion.img)`
  width: 100vw;
  position: absolute;
  bottom: 350px;
  left: 0;
`;

const Goal = styled(motion.h2)`
  position: absolute;
  bottom: 450px;
  left: 5vw;
  font-size: 4vw;
  font-weight: 600;
  color: #ff723a;
  z-index: 3;
`;

const MoreBtn = styled(motion.img).attrs({
  whileHover: { rotate: 360 },
})`
  position: absolute;
  bottom: 400px;
  right: 15vw;
  width: 180px;
  z-index: 3;
`;

const Test = styled.div`
  width: 100%;
  height: 400px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const ScrollWrap = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 20px;
  margin-bottom: 20px;
  @media (max-width: 600px) {
    margin-bottom: 0;
  }
`;

const TextContainer = styled.div`
  width: 470vmax;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  position: sticky;
  left: 0;
  @media (max-width: 1270px) {
    width: 670vmax;
  }
  @media (max-width: 600px) {
    width: 600vmax;
  }
`;

const Top = () => {
  const textContainerRef01 = useRef(null);

  React.useEffect(() => {
    const textContainer01 = textContainerRef01.current;

    gsap.to(textContainer01, {
      scrollTrigger: {
        trigger: textContainer01,
        start: "top center", // 트리거가 중앙에 도달했을 때 애니메이션 시작
        end: "+=20", // 애니메이션을 더 길게 실행하여 천천히 움직이도록 설정
        scrub: 0.5, // 스크롤과 함께 부드럽게 움직임, 낮은 값일수록 더 부드럽고 천천히 움직임
        pin: true, // 텍스트 컨테이너를 화면에 고정하여 스크롤 시 다른 요소와 함께 움직이게 함
        // markers: true, // 디버깅을 위해 스크롤 트리거 마커 표시
      },
      x: "-25%", // 텍스트를 왼쪽으로 이동
      ease: "power1.out", // 부드러운 애니메이션 적용
    });
  }, []);

  return (
    <Container>
      <Test>
        <TopBg
          initial={{ opacity: 0, y: -100 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: { delay: 0.3 },
          }}
          src={bg}
          alt="bg"
        />
        <ScrollWrap>
          <TextContainer ref={textContainerRef01}>
            <ScrollText />
          </TextContainer>
        </ScrollWrap>
      </Test>
      <Goal
        initial={{ opacity: 0, x: 200 }}
        whileInView={{
          opacity: 1,
          x: 0,
          transition: { delay: 0.5 },
        }}
      >
        페르소나 기반 초개인화 음성대화
      </Goal>
      <TopBg2
        initial={{ opacity: 0, x: -200 }}
        whileInView={{
          opacity: 1,
          x: 0,
          transition: { delay: 0.5 },
        }}
        src={bg2}
        alt="bg2"
      />

      <a href="https://www.braindeck.net/services/">
        <MoreBtn
          initial={{ opacity: 0, x: -200 }}
          whileInView={{
            opacity: 1,
            x: 0,
            transition: { delay: 0.5 },
          }}
          src={moreBtn}
          alt="moreBtn"
        />
      </a>
      <TopMotion />
    </Container>
  );
};

export default Top;
