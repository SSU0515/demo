import React, { useEffect, useState } from "react";
import "./App.css";
import { createGlobalStyle } from "styled-components";
import styled from "styled-components";
import Music from "./components/Music";
import Detection from "./components/Detection";
import Demo from "./components/Demo";

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
    background-color: #131528;
  }
`;

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #110f0f;
  overflow-x: hidden;
  min-width: 1280px;
`;

const PostsContainer = styled.div`
  padding: 20px;
  color: white;
`;

function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("https://www.braindeck.net/testpage/wp-json/wp/v2/posts")
      .then((response) => response.json())
      .then((data) => setPosts(data))
      .catch((error) => console.error("Error fetching posts:", error));
  }, []);

  return (
    <Container>
      <GlobalStyle />
      {/* <Header /> */}
      <Music />
      <Detection />
      <Demo />
      <PostsContainer>
        <ul>
          {posts.map((post) => (
            <li key={post.id}>
              <h2>{post.title.rendered}</h2>
              <div
                dangerouslySetInnerHTML={{ __html: post.content.rendered }}
              />
            </li>
          ))}
        </ul>
      </PostsContainer>
    </Container>
  );
}

export default App;
