import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import TopBanner from "./main/TopBanner";
import Top from "./main/Top";
import { createGlobalStyle } from "styled-components";
import Middle from "./main/Middle";
import MiddleSecond from "./main/MiddleSecond";
import Bottom from "./main/Bottom";

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Noto+Sans:ital,wght@0,100..900;1,100..900&display=swap');
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;

        /* ( 크롬, 사파리, 오페라, 엣지 ) 동작 */
        ::-webkit-scrollbar {
        display: none;
    }
  }
  li{
    list-style: none;
  }
  a{
    text-decoration: none;
    color: inherit;
  }
  
  body{
    font-family: "Noto Sans", sans-serif;
  }
`;

const Container = styled.div`
  width: 100vw;
  background-color: #000;
  overflow-x: hidden;
  min-width: 1280px;
`;

const Main = () => {
  return (
    <Container>
      <GlobalStyle />

      <TopBanner />
      <Top />
      <Middle />
      <MiddleSecond />
      <Bottom />
    </Container>
  );
};

export default Main;
