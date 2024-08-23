// MusicComponent.js
import React, { useState, useEffect, useRef } from "react";
import styled, { keyframes } from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;
  z-index: 2;
  h4 {
    color: #fff;
    font-size: 16px;
    font-weight: 400;
  }
  span {
    flex-direction: row;
    color: #ff723a;
  }
`;

const SongTitle = styled.h1`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  font-size: 45px;
  color: #fff;
  p {
    font-size: 16px;
    font-weight: 400;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 20px;
`;

const loadingAnimation = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 100px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  border: none;
  border-radius: 50%;
  background-color: ${(props) => (props.isActive ? "#fff" : "#666")};
  color: #000;
  position: relative;
  &:hover {
    background-color: #ff723a;
  }

  &::after {
    content: "";
    display: ${(props) => (props.isLoading ? "block" : "none")};
    position: absolute;
    top: 50%;
    left: 50%;
    width: 20px;
    height: 20px;
    margin: -10px 0 0 -10px;
    border-radius: 50%;
    animation: ${loadingAnimation} 5s linear infinite;
  }
`;

const Canvas = styled.canvas`
  width: 800px;
  height: 200px;
  display: flex;
  background-color: none;
`;

const MusicComponent = ({ song }) => {
  const [currentSrc, setCurrentSrc] = useState(song.src[0]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const audioRef = useRef(null);
  const canvasRef = useRef(null);
  const audioContextRef = useRef(null); // AudioContext를 재사용하기 위해 useRef로 저장
  const analyserRef = useRef(null); // AnalyserNode도 useRef로 저장

  useEffect(() => {
    if (!audioContextRef.current) {
      // 처음 로드될 때만 AudioContext와 AnalyserNode를 생성
      audioContextRef.current = new (window.AudioContext ||
        window.webkitAudioContext)();
      analyserRef.current = audioContextRef.current.createAnalyser();
      analyserRef.current.fftSize = 256;

      const audioElement = audioRef.current;
      const audioSrc =
        audioContextRef.current.createMediaElementSource(audioElement);
      audioSrc.connect(analyserRef.current);
      analyserRef.current.connect(audioContextRef.current.destination);
    }
  }, []);

  useEffect(() => {
    if (!analyserRef.current) return;

    const canvasElement = canvasRef.current;
    const canvasCtx = canvasElement.getContext("2d");
    const bufferLength = analyserRef.current.frequencyBinCount;
    const dataArray = new Uint8Array(bufferLength);

    const WIDTH = canvasElement.width;
    const HEIGHT = canvasElement.height;

    const draw = () => {
      requestAnimationFrame(draw);
      analyserRef.current.getByteFrequencyData(dataArray);

      canvasCtx.clearRect(0, 0, WIDTH, HEIGHT);
      canvasCtx.fillStyle = "#110f0f";
      canvasCtx.fillRect(0, 0, WIDTH, HEIGHT);

      const barWidth = (WIDTH / bufferLength) * 2.5;
      let barHeight;
      let x = 0;

      for (let i = 0; i < bufferLength; i++) {
        barHeight = dataArray[i];

        const y = HEIGHT - barHeight / 2;

        // 바의 x, y 좌표를 계산하여 중앙 정렬
        const barX = x + barWidth / 0.9;

        canvasCtx.fillStyle = `#ff723a`;

        // 코너를 둥글게 처리
        canvasCtx.beginPath();
        canvasCtx.moveTo(barX - barWidth / 2, y + barHeight / 2);
        canvasCtx.lineTo(barX + barWidth / 2, y + barHeight / 2);
        canvasCtx.arcTo(
          barX + barWidth / 2,
          y,
          barX - barWidth / 2,
          y,
          5 // border-radius 값
        );
        canvasCtx.lineTo(barX - barWidth / 2, y);
        canvasCtx.arcTo(
          barX - barWidth / 2,
          y + barHeight / 2,
          barX + barWidth / 2,
          y + barHeight / 2,
          5 // border-radius 값
        );
        canvasCtx.fill();

        x += barWidth + 2;
      }
    };

    draw();
  }, [currentSrc]); // currentSrc가 바뀔 때마다 애니메이션 재생

  const handleButtonClick = (index) => {
    setIsLoading(true);
    setActiveIndex(index);
    setCurrentSrc(song.src[index]);
    setTimeout(() => {
      setIsLoading(false);
    }, 3000); // 로딩 애니메이션 3s
  };

  return (
    <Container>
      <SongTitle>
        {song.title}
        <p>원곡가수 _ {song.singer}</p>
      </SongTitle>
      <audio ref={audioRef} controls src={currentSrc} />
      <Canvas ref={canvasRef} />
      <h4>
        원하는 가수를 선택해 <span>AI Vocal Cloning</span>을 경험해보세요.
      </h4>
      <ButtonContainer>
        {song.src.map((_, index) => (
          <Button
            key={index}
            isActive={activeIndex === index}
            isLoading={isLoading && activeIndex === index}
            onClick={() => handleButtonClick(index)}
          >
            가수 {index + 1}
          </Button>
        ))}
      </ButtonContainer>
    </Container>
  );
};

export default MusicComponent;
