import React, { useState } from "react";
import styled from "styled-components";
import { useDropzone } from "react-dropzone";
import lucy5 from "../asset/lucy5.png";

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

const LoadingBar = styled.div`
  position: absolute;
  bottom: 250px;
  left: 50%;
`;

// 컴포넌트
const Detection = () => {
  const [loading, setLoading] = useState(false);
  const [fileName, setFileName] = useState("");

  const { getRootProps, getInputProps } = useDropzone({
    accept: "audio/mp3", // MP3 파일만 허용
    onDrop: (acceptedFiles) => {
      setLoading(true);
      setFileName(acceptedFiles[0].name); // 파일 이름 설정

      // 파일 업로드 시뮬레이션
      setTimeout(() => {
        setLoading(false);
        // 여기에 실제 파일 업로드 처리 로직을 추가
      }, 5000); // 2초의 업로드 시뮬레이션
    },
  });

  return (
    <Container>
      <BgTitle>AI Voice Detection</BgTitle>
      <Title>AI Voice Detection</Title>
      <Lucy src={lucy5} alt="lucy5" />
      <DropzoneArea {...getRootProps()}>
        <input {...getInputProps()} />
        {loading ? (
          <LoadingContainer>
            <LoadingBar
              data-preset="fan"
              class="ldBar label-center"
              data-value="70"
            ></LoadingBar>
            <LoadingText>{fileName} 업로드 중...</LoadingText>
          </LoadingContainer>
        ) : (
          "여기에 MP3 파일을 드래그 & 드롭 하거나 클릭하여 선택하세요"
        )}
      </DropzoneArea>
    </Container>
  );
};

export default Detection;
