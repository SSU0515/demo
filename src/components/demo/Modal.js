import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

// 모달의 배경 오버레이 스타일 정의
const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  display: ${({ "data-modalopen": modalOpen }) =>
    modalOpen ? "block" : "none"};
  z-index: 10;
`;

// 모달 컨테이너 스타일 정의
const Container = styled(motion.div)`
  width: 60vw;
  height: 70vh;
  background: #222;
  border-radius: 30px;
  padding: 40px;
  position: absolute;
  top: 50%;
  left: 50vw;
  transform: translate(-50%, -50%);
  z-index: 20;
  display: ${({ "data-modalopen": modalOpen }) =>
    modalOpen ? "block" : "none"};
  color: #fff;
`;

function Modal({ modalOpen, modalClose, id, url }) {
  return (
    <Overlay data-modalopen={modalOpen} onClick={modalClose}>
      <Container
        data-modalopen={modalOpen}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={(e) => e.stopPropagation()} // 모달 컨테이너를 클릭해도 모달이 닫히지 않도록 이벤트 전파 중지
      >
        {id}
      </Container>
    </Overlay>
  );
}

export default Modal;
