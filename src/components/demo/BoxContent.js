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
  margin: 0 auto;
`;

const ButtonBox = styled.div`
  display: flex;
  justify-content: end;
  align-items: flex-end;
  flex-direction: column;
  gap: 10px;
  width: 20%;
  padding-top: 20px;
  a {
    text-align: end;
  }
`;

// const ModalBtn = styled.button`
//   width: 45px;
//   height: 45px;
//   &:hover {
//     scale: 1.2;
//   }
// `;

const ImageWrapper = styled.div`
  background: ${({ src }) => `url(${src}) no-repeat center center`};
  background-size: cover;
  width: ${({ imgsize }) => (imgsize === "large" ? "25vw" : "15vw")};
  height: ${({ imgsize }) => (imgsize === "large" ? "25vw" : "15vw")};
  display: flex;
  justify-content: center;
  margin: 0 auto;
  border-radius: 100%;
  @media (max-width: 600px) {
    width: ${(props) => (props.size === "large" ? "70vw" : "55vw")};
    height: ${(props) => (props.size === "large" ? "70vw" : "55vw")};
  }
`;

const BoxContent = ({ item, imgsize }) => {
  const [modal, setModal] = useState(false);

  const modalOpen = () => setModal(true);
  const modalClose = () => setModal(false);

  return (
    <Container>
      {/* 이미지가 제대로 표시되도록 item.src를 사용합니다 */}
      <ImageWrapper src={item.src} imgsize={imgsize} onClick={modalOpen} />
      <ContentBox>
        <ButtonBox>
          <Modal
            modalOpen={modal}
            modalClose={modalClose}
            id={item.title} // 모달에 표시할 내용을 적절히 전달합니다
            url={item.url}
          />
        </ButtonBox>
      </ContentBox>
    </Container>
  );
};

export default BoxContent;
//지금 코드의 문제점은 1.슬라이드에 이미지가 뜨지 않는다 2.모달창위로 prev,next버튼과 next슬라이드가 보인다
