import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import light from "../../asset/lignt.png";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Container = styled.div`
  width: 100vw;
  position: relative;
`;

const Light = styled.div`
  width: 25vw;
  height: 25vw;
  background-image: url(${light});
  background-size: cover;
  background-position: center;
  position: absolute;
`;

const TopMotion = () => {
  const [position, setPosition] = useState({ x: -1200, y: 0 });
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
    <Container>
      <div style={{ position: "relative", height: "1200px" }}>
        <svg
          width="100%"
          height="1200px"
          ref={svgRef}
          viewBox="0 0 1800 1000"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            ref={pathRef}
            d="M2 1C49.1667 107.164 145.5 264.2 590 338.047C801.301 373.152 1343 443.782 1397 691C1448.33 587.866 1595.4 384.552 1773 396.368"
            stroke="#FF723A"
            strokeWidth="4"
          />
        </svg>

        <Light
          style={{
            // Light 컴포넌트의 중앙을 경로 위에 위치시키기 위해 위치 조정
            top: `calc(${position.y}px - 10.5vw )`, // y축 위치에서 Light의 절반 높이를 뺌
            left: `calc(${position.x}px - 25vw)`, // x축 위치에서 Light의 절반 너비를 뺌
          }}
        />
      </div>
    </Container>
  );
};

export default TopMotion;
