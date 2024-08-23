import { React, useEffect } from "react";
import styled from "styled-components";
import img from "../../asset/banner.png";

const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10;
`;

const Content = styled.div`
  width: 80vw;
  height: 70vh;
  position: relative;
  top: -15vh;
  background: #111;
  padding: 20px;
  border-radius: 5px;
  text-align: center;
  z-index: 10;
  h2 {
    font-size: 1.8vw;
    color: #fff;
  }
`;

const Img = styled.div`
  position: absolute;
  top: 5vw;
  left: 10vw;
  width: 60vw;
  height: 55vh;
  background-image: url("${img}");
  background-size: cover;
`;

const ClosedBtn = styled.button`
  position: absolute;
  top: 30px;
  right: 50px;
  border: none;
  background: none;
  color: #fff;
  font-size: 1.5vw;
  &:hover {
    color: #ff723a;
  }
`;

const Popup = ({ isVisible, onClose }) => {
  useEffect(() => {
    const today = new Date().toDateString();
    const lastClosedDate = localStorage.getItem("popupClosedDate");

    if (lastClosedDate === today) {
      onClose(); // 오늘 이미 닫힌 상태라면 팝업을 숨깁니다.
    }

    if (isVisible) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isVisible, onClose]);

  const handleClose = () => {
    const today = new Date().toDateString();
    localStorage.setItem("popupClosedDate", today); // 현재 날짜를 저장합니다.
    onClose();
  };

  if (!isVisible) return null;
  return (
    <Container>
      <Content className="popup-content">
        <ClosedBtn onClick={handleClose}>☒</ClosedBtn>
        <h2>Braindeck Notice</h2>
        <Img />
      </Content>
    </Container>
  );
};

export default Popup;
