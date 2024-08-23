import React, { useState } from "react";
import styled from "styled-components";
import Modal from "./Modal";

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: #fff;
`;

const ContentBox = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column; /* Ensure items stack vertically */
  margin: 0 auto;
`;

const ExBox = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  p {
    font-family: "nexon";
    font-weight: 300;
    font-size: 18px;
    margin-bottom: 10px;
  }
`;

const Title = styled.h2`
  font-family: "nexonB";
  font-size: 35px;
  margin-bottom: 20px;
  color: #fccc44;
`;

const ImageWrapper = styled.div`
  background: ${({ imglink }) => `url(${imglink}) no-repeat center center`};
  background-size: cover;
  width: 90%;
  height: ${({ imgsize }) => (imgsize === "large" ? "275px" : "185px")};
  display: flex;
  justify-content: center;
  margin: 0 auto;
  margin-bottom: 30px;
  border-radius: 20px;
`;

const BoxContent = () => {
  const [modal, setModal] = useState(false);

  const modalOpen = () => setModal(true);
  const modalClose = () => setModal(false);

  return (
    <Container>
      <ContentBox>
        <ImageWrapper
          imglink="https://via.placeholder.com/600"
          imgsize="large"
        />
        <ExBox>
          <Title>Your Title Here</Title>
          <p>Some description or content goes here.</p>
        </ExBox>
        <button onClick={modalOpen}>Open Modal</button>
        <Modal modalOpen={modal} modalClose={modalClose} />
      </ContentBox>
    </Container>
  );
};

export default BoxContent;
