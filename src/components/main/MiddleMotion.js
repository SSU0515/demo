import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import light from "../../asset/lignt.png";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Container = styled(motion.div)`
  width: 100%;
  padding-top: 15vh;
`;

const Light = styled.div`
  width: 25vw;
  height: 25vw;
  background-image: url(${light});
  background-size: cover;
  background-position: center;
  position: absolute;
`;

const MotionBox = styled.div`
  position: relative;
  height: 1200px;
`;

const MiddleMotion = () => {
  const [position, setPosition] = useState({ x: -260, y: 0 });
  const svgRef = useRef(null);
  const pathRef = useRef(null);

  useEffect(() => {
    // pathRef.current가 null이 아닐 때만 실행
    if (pathRef.current && svgRef.current) {
      const pathLength = pathRef.current.getTotalLength();

      const updatePosition = (self) => {
        const scrollPercentage = self.progress;
        const point = pathRef.current.getPointAtLength(
          pathLength * scrollPercentage
        );
        setPosition({ x: point.x, y: point.y - 130 });
      };

      // GSAP ScrollTrigger 설정
      const animation = gsap.to(
        {},
        {
          scrollTrigger: {
            trigger: svgRef.current,
            start: "top center", // 스크롤 시작 지점 조정
            end: "bottom center", // 스크롤 종료 지점 조정
            scrub: 4, // 스크롤 연동 속도
            onUpdate: updatePosition,
          },
        }
      );

      // Cleanup function to remove ScrollTrigger instance on unmount
      return () => {
        if (animation.scrollTrigger) animation.scrollTrigger.kill();
      };
    }
  }, []); // 의존성 배열을 빈 배열로 설정하여 최초 렌더링 시에만 실행되도록 함

  return (
    <Container
      initial={{ opacity: 0, x: -200 }}
      whileInView={{
        opacity: 1,
        x: 0,
        transition: { delay: 0.3 },
      }}
    >
      <MotionBox>
        <svg
          width="100%"
          height="1000px"
          ref={svgRef}
          viewBox="0 0 1800 1000"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            ref={pathRef}
            d="M-68 315.686C47.1007 387.376 422.773 454.235 1004.65 148.154C1586.54 -157.926 1944.5 88.0142 2050.75 249.244"
            stroke="#FF723A"
            stroke-width="4"
          />
        </svg>

        <Light
          style={{
            top: `calc(${position.y}px - 6vw )`, // y축 위치에서 Light의 절반 높이를 뺌
            left: `calc(${position.x}px - 10.5vw)`, // x축 위치에서 Light의 절반 너비를 뺌
          }}
        />
      </MotionBox>
    </Container>
  );
};

export default MiddleMotion;
