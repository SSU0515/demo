import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import { useDropzone } from "react-dropzone";
import lucy5 from "../asset/lucy5.png";
import ArcGaugeComponent from "../ArcGaugeComponent"; // ArcGaugeComponent 임포트

const Container = styled.div`
  width: 100%;
  height: 120vh;
  color: #fff;
  position: relative;
`;

const BgTitle = styled.h3`
  position: absolute;
  top: 60px;
  right: -70px;
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
const Veta = styled.h3`
  position: absolute;
  top: 230px;
  left: 150px;
  font-size: 14px;
  z-index: 4;
  color: #555;
`;

const Lucy = styled.img`
  width: 30vw;
  position: absolute;
  top: -20vw;
  left: 50%;
  transform: translate(-50%);
  opacity: 30%;
`;

const DropzoneArea = styled.div`
  position: absolute;
  bottom: 10%;
  left: 50%;
  transform: translate(-50%);
  width: 100%;
  height: 80px;
  border-radius: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-size: 24px;
  cursor: pointer;
  span {
    margin-top: 80px;
  }
`;

const LoadingContainer = styled.div`
  position: absolute;
  bottom: -5vh;
  left: 50%;
  transform: translate(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center; /* 중앙 정렬 */
  text-align: center; /* 텍스트 중앙 정렬 */
`;

const LoadingText = styled.p`
  margin-top: 10px;
  font-size: 16px;
  color: #fff;
`;

const GaugeContainer = styled.div`
  position: absolute;
  bottom: -5vh; /* LoadingContainer와 동일한 위치 조정 */
  left: 50%;
  transform: translate(-50%);
  display: flex;
  align-items: center;
  justify-content: center; /* 중앙 정렬 */
  text-align: center; /* 텍스트 중앙 정렬 */
`;
const GaugeText = styled.div`
  position: absolute;
  bottom: 10vh;
  right: -5vw;
  display: flex;
  width: 50vw;
  padding: 0 5vw;
  justify-content: space-between;
  color: #ff723a;
`;
const Detection = () => {
  const [loading, setLoading] = useState(false);
  const [fileName, setFileName] = useState("");
  const [gaugeValue, setGaugeValue] = useState(null);
  const [randomValue, setRandomValue] = useState(0);

  // 파일-퍼센트 매핑 정의
  const filePercentages = {
    "김윤아_나인 너에게_원본.mp3": 14,
    "김윤아 AI ( FAKE )_ 나인 너에게.mp3": 91,
    "조성모_피아노_원본.mp3": 17,
    "조성모 AI ( FAKE )_ 피아노 .mp3": 93,
    "김건모 _ 사랑이 떠나가네_ 원본.mp3": 7,
    "김건모 AI (FAKE) _ 사랑이 떠나가네.mp3": 89,
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
      let count = 0;
      randomIntervalRef.current = setInterval(() => {
        if (count < 3) {
          setRandomValue(Math.floor(Math.random() * 100)); // 0에서 100 사이의 랜덤 값
          count++;
        } else {
          clearInterval(randomIntervalRef.current);
          setLoading(false);
          const percentage = filePercentages[name] || 0;
          setGaugeValue(percentage);
        }
      }, 1000); // 1초마다 랜덤 값 업데이트
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
      <Veta>
        정해진 파일명에만 반응하는 Veta버전입니다. 실제 모델 출시는 11월
        예정입니다.
      </Veta>
      <DropzoneArea {...getRootProps()}>
        <Lucy src={lucy5} alt="lucy5" />

        <input {...getInputProps()} />
        <span>여기에 MP3 파일을 드래그 & 드롭 하거나 클릭하여 선택하세요.</span>
        {loading ? (
          <LoadingContainer>
            <ArcGaugeComponent value={randomValue} />
            <GaugeText>
              <p>Real</p>
              <p>AI</p>
            </GaugeText>
            <LoadingText>{fileName} 업로드 중...</LoadingText>
          </LoadingContainer>
        ) : gaugeValue !== null ? (
          <GaugeContainer>
            <ArcGaugeComponent value={gaugeValue} />
            <GaugeText>
              <p>Real</p>
              <p>AI</p>
            </GaugeText>
          </GaugeContainer>
        ) : (
          ""
        )}
      </DropzoneArea>
    </Container>
  );
};

export default Detection;
