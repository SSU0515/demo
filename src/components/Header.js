import React from "react";
import styled from "styled-components";
import logo from "../asset/logo.png";

const Container = styled.div`
  width: 100%;
  height: 120px;
  /* border: 1px solid #fff; */
  padding: 0 40px;
  position: fixed;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: rgba(15, 15, 15, 0.8);
  z-index: 5;
`;
const Logo = styled.img`
  width: 180px;
`;

const Menu = styled.div`
  font-size: 18 px;
  color: #fff;
  ul {
    display: flex;
    flex-direction: row;
    gap: 30px;
  }
  li {
    &:hover {
      color: #ff723a;
    }
  }
`;

const Header = () => {
  return (
    <Container>
      <Logo src={logo} alt="logo" />
      <Menu>
        <ul>
          <li>
            <a href="#about" rel="noopener noreferrer">
              ABOUT
            </a>
          </li>
          <li>
            <a href="#content" rel="noopener noreferrer">
              CONTENT
            </a>
          </li>
          <li>
            <a href="#news" rel="noopener noreferrer">
              NEWS
            </a>
          </li>
          <li>
            <a href="#contact" rel="noopener noreferrer">
              CONTACT
            </a>
          </li>
        </ul>
      </Menu>
    </Container>
  );
};

export default Header;
