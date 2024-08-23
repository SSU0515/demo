import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  display: ${({ "data-modalopen": modalOpen }) =>
    modalOpen ? "block" : "none"};
  z-index: 15;
`;

const Container = styled(motion.div)`
  width: 80%;
  min-width: 980px;
  background: #222;
  border-radius: 20px;
  padding: 40px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 16;
  display: ${({ "data-modalopen": modalOpen }) =>
    modalOpen ? "block" : "none"};
  color: #fff;
`;

function Modal({ modalOpen, modalClose, title }) {
  return (
    <Overlay data-modalopen={modalOpen} onClick={modalClose}>
      <Container
        data-modalopen={modalOpen}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={(e) => e.stopPropagation()}
      ></Container>
    </Overlay>
  );
}

export default Modal;
