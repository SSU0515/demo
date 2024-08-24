import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import { useDropzone } from "react-dropzone";
import lucy5 from "../asset/lucy5.png";
import ArcGaugeComponent from "../ArcGaugeComponent"; // ArcGaugeComponent 임포트

const Container = styled.div`
  width: 100%;
  height: 1400px;
  color: #fff;
  position: relative;
`;

const BgTitle = styled.h3`
  position: absolute;
  top: 60px;
  right: -70px;
  font-size: 13rem;
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

const Lucy = styled.img`
  width: 500px;
  position: absolute;
  top: 35%;
  left: 50%;
  transform: translate(-50%);
  opacity: 30%;
`;

const DropzoneArea = styled.div`
  position: absolute;
  bottom: 480px;
  left: 50%;
  background-color: #fff;
  transform: translate(-50%);
  width: 40%;
  height: 80px;
  border-radius: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #000;
  font-size: 20px;
  cursor: pointer;
`;

const LoadingContainer = styled.div`
  position: absolute;
  bottom: 250px;
  left: 50%;
  transform: translate(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const LoadingText = styled.p`
  margin-top: 10px;
  font-size: 16px;
  color: #fff;
`;

const GaugeContainer = styled.div`
  position: absolute;
  bottom: 20vw;
  left: 5vw;
  width: 30vw; /* 조정할 폭 */
  height: 30vh; /* 조정할 높이 */
`;

const Detection = () => {
  const [loading, setLoading] = useState(false);
  const [fileName, setFileName] = useState("");
  const [gaugeValue, setGaugeValue] = useState(null);
  const [randomValue, setRandomValue] = useState(0);

  // 파일-퍼센트 매핑 정의
  const filePercentages = {
    "song1.mp3": 85,
    "song2.mp3": 70,
    "song3.mp3": 45,
  };

  // useRef를 사용하여 인터벌 ID 저장
  const randomIntervalRef = useRef(null);

  const { getRootProps, getInputProps } = useDropzone({
    accept: "audio/mp3",
    onDrop: (acceptedFiles) => {
      setLoading(true);
      const file = acceptedFiles[0];
      const name = file.name;
      setFileName(name);

      // 3초 동안 랜덤 값 표시
      randomIntervalRef.current = setInterval(() => {
        setRandomValue(Math.floor(Math.random() * 100)); // 0에서 100 사이의 랜덤 값
      }, 3000);

      setTimeout(() => {
        clearInterval(randomIntervalRef.current);
        setLoading(false);
        const percentage = filePercentages[name] || 0;
        setGaugeValue(percentage);
      }, 3000); // 3초 후에 지정된 값으로 변경
    },
  });

  useEffect(() => {
    // 컴포넌트 언마운트 시 인터벌 정리
    return () => clearInterval(randomIntervalRef.current);
  }, []);

  return (
    <Container>
      <BgTitle>AI Voice Detection</BgTitle>
      <Title>AI Voice Detection</Title>
      <Lucy src={lucy5} alt="lucy5" />
      <DropzoneArea {...getRootProps()}>
        <input {...getInputProps()} />
        {loading ? (
          <LoadingContainer>
            <ArcGaugeComponent value={randomValue} />
            <LoadingText>{fileName} 업로드 중...</LoadingText>
          </LoadingContainer>
        ) : gaugeValue !== null ? (
          <GaugeContainer>
            <ArcGaugeComponent value={gaugeValue} />
          </GaugeContainer>
        ) : (
          "여기에 MP3 파일을 드래그 & 드롭 하거나 클릭하여 선택하세요"
        )}
      </DropzoneArea>
    </Container>
  );
};

export default Detection;
