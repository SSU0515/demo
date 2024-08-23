import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import light from "../../asset/lignt.png";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Container = styled(motion.div)`
  width: 100%;
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
  height: 1300px;
`;

const MiddleMotion2 = () => {
  const [position, setPosition] = useState({ x: 1000, y: 0 });
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
        setPosition({ x: point.x, y: point.y });
      };

      // GSAP ScrollTrigger 설정
      const animation = gsap.to(
        {},
        {
          scrollTrigger: {
            trigger: svgRef.current,
            start: "top center", // 스크롤 시작 지점 조정
            end: "bottom center", // 스크롤 종료 지점 조정
            scrub: true, // 스크롤 연동 속도
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
      initial={{ opacity: 0, x: 100 }}
      whileInView={{
        opacity: 1,
        x: 0,
        transition: { delay: 0.3 },
      }}
    >
      <MotionBox>
        <svg
          width="100vw"
          height="1000px"
          ref={svgRef}
          viewBox="-895 0 1800 1000"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            ref={pathRef}
            d="M960.965 0.93457C934.049 71.0109 790.428 225.911 431.267 284.9C72.1057 343.89 -3.93307 571.981 2.94269 678.654"
            stroke="#FF723A"
            strokeWidth="4"
          />
        </svg>

        <Light
          style={{
            top: `calc(${position.y}px - 12.5vw )`, // y축 위치에서 Light의 절반 높이를 뺌
            left: `calc(${position.x}px + 37vw)`, // x축 위치에서 Light의 절반 너비를 뺌
          }}
        />
      </MotionBox>
    </Container>
  );
};

export default MiddleMotion2;
