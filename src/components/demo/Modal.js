import React from "react";
import styled from "styled-components";

const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalContent = styled.div`
  background: #333;
  padding: 20px;
  border-radius: 10px;
  width: 60%;
  height: 70%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 30px;
  right: 30px;
  background: none;
  color: #fff;
  border: none;
  font-size: 30px;
  z-index: 1000;
  cursor: pointer;
  &:hover {
    color: #ff723a;
  }
`;

function Modal({ modalOpen, modalClose, url }) {
  if (!modalOpen) return null;

  return (
    <ModalWrapper onClick={modalClose}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        <CloseButton onClick={modalClose}>×</CloseButton>
        <iframe
          width="90%"
          height="80%"
          src={`${url}`}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </ModalContent>
    </ModalWrapper>
  );
}

export default Modal;
