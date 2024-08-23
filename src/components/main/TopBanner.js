import React, { useEffect, useState } from "react";
import styled from "styled-components";
import useMeasure from "react-use-measure";
import { useTrail, animated } from "@react-spring/web";
import bannerimg from "../../asset/Main.png";
import Popup from "./Popup";

// styled-components를 사용하여 컨테이너와 배너 정의
const Container = styled.div`
  width: 100vw;
  height: 100vh;
  margin-bottom: 150px;
  margin-top: 150px;
  position: relative;
`;

const Banner = styled.div`
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  background-image: url(${bannerimg});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`;

// 트레일 애니메이션 요소의 스타일 정의
const HooksMain = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  filter: url("#goo");
  overflow: hidden;
  background: transparent;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  cursor: default;

  & > div {
    position: absolute;
    will-change: transform;
    border-radius: 50%;
    background: lightcoral;
    box-shadow: 10px 10px 5px 0px rgba(0, 0, 0, 0.75);
    opacity: 0.6;

    &:nth-child(1) {
      width: 60px;
      height: 60px;
      background: radial-gradient(
        circle,
        #ff723a,
        #ff5c1b
      ); /* 방사형 그라데이션 */
      border-radius: 50%; /* 원형 */
    }

    &:nth-child(2) {
      width: 125px;
      height: 125px;
      background: radial-gradient(
        circle,
        #ff723a,
        #ff5c1b
      ); /* 방사형 그라데이션 */
      border-radius: 30%; /* 부드러운 곡선 */
    }

    &:nth-child(3) {
      width: 75px;
      height: 75px;
      background: radial-gradient(
        circle,
        #ff723a,
        #ff5c1b
      ); /* 방사형 그라데이션 */
      border-radius: 15%; /* 사각형에 가까운 곡선 */
    }

    &::after {
      content: "";
      position: absolute;
      top: 20px;
      left: 20px;
      width: 20px;
      height: 20px;
      border-radius: 50%;
      background: rgba(255, 255, 255, 0.8);
    }

    &:nth-child(2)::after {
      top: 35px;
      left: 35px;
      width: 35px;
      height: 35px;
    }

    &:nth-child(3)::after {
      top: 25px;
      left: 25px;
      width: 25px;
      height: 25px;
    }
  }
`;

// 애니메이션 설정: 빠른 설정과 느린 설정
const fast = { tension: 1200, friction: 40 };
const slow = { mass: 10, tension: 200, friction: 50 };

// 위치 변환 함수
const trans = (x, y) => `translate3d(${x}px,${y}px,0) translate3d(-50%,-50%,0)`;

function TopBanner() {
  const [isPopupVisible, setPopupVisible] = useState(false);

  useEffect(() => {
    // 팝업의 표시 여부를 결정하는 논리
    const today = new Date().toDateString();
    const lastClosedDate = localStorage.getItem("popupClosedDate");

    if (lastClosedDate !== today) {
      setPopupVisible(true); // 오늘 팝업이 닫히지 않았으면 팝업을 표시합니다.
    }
  }, []);

  const handleClosePopup = () => {
    setPopupVisible(false);
  };

  // react-spring의 useTrail 훅을 사용하여 트레일 애니메이션 설정
  const [trail, api] = useTrail(3, (i) => ({
    xy: [0, 0],
    config: i === 0 ? fast : slow,
  }));

  // 요소의 위치를 측정
  const [ref, { left, top }] = useMeasure();

  // 마우스 움직임을 처리
  const handleMouseMove = (e) => {
    api.start({ xy: [e.clientX - left, e.clientY - top] });
  };

  return (
    <Container>
      <Popup isVisible={isPopupVisible} onClose={handleClosePopup} />
      <Banner />
      <svg style={{ position: "absolute", width: 0, height: 0, zIndex: 5 }}>
        <filter id="goo">
          <feGaussianBlur in="SourceGraphic" result="blur" stdDeviation="30" />
          <feColorMatrix
            in="blur"
            values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 30 -7"
          />
        </filter>
      </svg>

      <HooksMain ref={ref} onMouseMove={handleMouseMove}>
        {trail.map((props, index) => (
          <animated.div
            key={index}
            style={{
              transform: props.xy.to(trans),
            }}
          />
        ))}
      </HooksMain>
    </Container>
  );
}

export default TopBanner;
