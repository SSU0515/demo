import React, { useState } from "react";
import styled from "styled-components";
import { faChevronUp, faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import MusicComponent from "./music/MusicConponent";
import song1 from "../asset/zamona-net-newjeans-bubble-gum.mp3";
import song1a from "../asset/zamona-net-newjeans-hype-boy.mp3";
import img1 from "../asset/image1.png";
import img2 from "../asset/image2.png";
import img3 from "../asset/image3.png";
import img4 from "../asset/image4.png";
import img5 from "../asset/image5.png";
import img6 from "../asset/image6.png";
import img7 from "../asset/image7.png";
import img8 from "../asset/image8.png";
import gra from "../asset/gradation.png";

const Container = styled.div`
  width: 100%;
  height: 1000px;
  position: relative;
  overflow: hidden;
  p {
    color: #fff;
  }
  h3 {
    position: absolute;
    top: 60px;
    right: 20px;
    font-size: 14rem;
    font-weight: 900;
    color: #222;
    z-index: 0;
  }
`;

const ImgBox = styled.div`
  width: 500px;
  height: 500px;
  border-radius: 50%;
  position: absolute;
  top: 220px;
  left: -250px;
  background-image: url(${(props) => props.image});
  background-size: cover;
  background-position: center;
  z-index: 2;
`;

const ImgBoxBack = styled.img`
  position: absolute;
  top: 100px;
  left: -300px;
  width: 800px;
  z-index: 1;
`;

const SongTitleBox = styled.div`
  width: 1000px;
  height: 1000px;
  border-radius: 50%;
  position: absolute;
  top: 20px;
  left: -320px;
  transform: rotate(115deg);
  z-index: 2;
`;

const SongTitle = styled.h2`
  position: absolute;
  transform-origin: left;
  transform: rotate(${(props) => props.angle - 90}deg);
  color: white;
  font-size: 30px;
  font-weight: 600;
  white-space: nowrap;
  span {
    font-size: 14px;
    margin-left: 25px;
  }
`;

const NavButton = styled.button`
  position: absolute;
  transform: translateY(-50%);
  background-color: transparent;
  color: #888;
  border: none;
  font-size: 16px;
  cursor: pointer;
  z-index: 4;
  &:hover {
    color: #ff723a;
  }
`;

const PrevButton = styled(NavButton)`
  top: 47%;
  left: 450px;
`;

const NextButton = styled(NavButton)`
  top: 52%;
  left: 450px;
`;

const songs = [
  {
    title: "Omg",
    singer: "NewJeans",
    src: [song1, song1a, song1a, song1a, song1],
    image: img1,
  },
  {
    title: "ASPA",
    singer: "NewJeans",
    src: [song1, song1a, song1a, song1a, song1],
    image: img2,
  },
  {
    title: "Small Girl",
    singer: "leeYoungji",
    src: [song1, song1a, song1a, song1a, song1],
    image: img3,
  },
  {
    title: "Supernova",
    singer: "Aspa",
    src: [song1, song1a, song1a, song1a, song1],
    image: img4,
  },
  {
    title: "Hype Boy",
    singer: "NewJeans",
    src: [song1, song1a, song1a, song1],
    image: img5,
  },
  {
    title: "lalalaala",
    singer: "hello",
    src: [song1, song1a, song1a, song1a, song1],
    image: img6,
  },
  {
    title: "abcdefu",
    singer: "Bye",
    src: [song1, song1a, song1a, song1a, song1],
    image: img7,
  },
  {
    title: "Ditto",
    singer: "NewJeans",
    src: [song1, song1a, song1a, song1a, song1],
    image: img8,
  },
];

const Music = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // 마우스 휠 이벤트 핸들러
  const handleWheel = (event) => {
    if (event.deltaY > 0) {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % songs.length);
    } else {
      setCurrentIndex(
        (prevIndex) => (prevIndex - 1 + songs.length) % songs.length
      );
    }
  };

  // 이전 곡 버튼 클릭 핸들러
  const handlePrevClick = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + songs.length) % songs.length
    );
  };

  // 다음 곡 버튼 클릭 핸들러
  const handleNextClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % songs.length);
  };

  // 노래 제목 렌더링
  const renderSongTitles = () => {
    const visibleSongs = [];
    for (let i = 0; i < 5; i++) {
      visibleSongs.push(songs[(currentIndex + i) % songs.length]);
    }

    const angleIncrement = 130 / (visibleSongs.length - 1); // 각 노래 제목 사이의 각도
    const radius = 300; // 제목들이 배치될 원의 반지름

    return visibleSongs.map((song, index) => {
      const angle = index * angleIncrement - 90; // 중앙을 기준으로 90도씩 회전
      const topPosition = `calc(50% - ${
        radius * Math.cos((angle * Math.PI) / 180)
      }px)`;
      const leftPosition = `calc(50% + ${
        radius * Math.sin((angle * Math.PI) / 180)
      }px)`;

      return index === 2 ? ( // 중앙에 위치한 곡일 때만 MusicComponent 렌더링
        <div
          key={song.title}
          style={{
            position: "absolute",
            top: topPosition,
            left: leftPosition,
            transform: `rotate(${angle + 25}deg)`,
            zIndex: 3,
          }}
        >
          <MusicComponent song={song} />
        </div>
      ) : (
        <SongTitleBox key={song.title}>
          <SongTitle
            angle={angle}
            style={{
              top: topPosition,
              left: leftPosition,
            }}
          >
            {song.title}
            <span>{song.singer}</span>
          </SongTitle>
        </SongTitleBox>
      );
    });
  };

  return (
    <Container onWheel={handleWheel}>
      {renderSongTitles()}
      <ImgBox image={songs[currentIndex].image} />
      <ImgBoxBack src={gra} alt="a" />
      <h3>AI Vocal Cloning</h3>
      <PrevButton onClick={handlePrevClick}>
        {/* <FontAwesomeIcon icon={faChevronUp} /> */}
        PREV
      </PrevButton>
      <NextButton onClick={handleNextClick}>
        NEXT
        {/* <FontAwesomeIcon icon={faChevronDown} /> */}
      </NextButton>
    </Container>
  );
};

export default Music;
