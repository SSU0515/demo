import React, { useState } from "react";
import styled from "styled-components";
import MusicComponent from "./music/MusicConponent";
import gra from "../asset/gradation.png";
//kanabon
import kanabon from "../asset/music/kanavon.png";
import imissyouKanavon from "../asset/music/kanavon/카나본 AI -I MISS YOU( 원곡_서지원).mp3";
import heyKanavon from "../asset/music/kanavon/카나본 AI - Hey Hey Hey( 원곡_김윤아).mp3";
import namKanavon from "../asset/music/kanavon/카나본 AI - 잘못된 만남 ( 원곡_김건모 ).mp3";
//jiwon
import jiwon from "../asset/music/jiwon.png";
import sorryJiwon from "../asset/music/jiwon/서지원 AI _ 미안해 널 미워해 ( 김윤아 ).mp3";
import toyJiwon from "../asset/music/jiwon/서지원 AI_ 바램(토이).mp3";
import namJiwon from "../asset/music/jiwon/서지원 AI _ 잘못된 만남 ( 김건모 ).mp3";
//yuna
import yuna from "../asset/music/yuna.png";
import makeYuna from "../asset/music/yuna/김윤아 AI_ 화장을 고치고 (왁스).mp3";
import momYuna from "../asset/music/yuna/김윤아 AI_ 엄마가 딸에게 ( 양희은 ).mp3";
import bondaYuna from "../asset/music/yuna/김윤아 AI - 바람이 분다(원곡_이소라).mp3";
//kunmo
import kunmo from "../asset/music/kunmo.png";
import nightKunmo from "../asset/music/kunmo/김건모 AI_ 깊은 밤을 날아서 ( 이문세 ).mp3";
import heyKunmo from "../asset/music/kunmo/김건모  AI - Hey Hey Hey (원곡_ 김윤아).mp3";
import imissyouKunmo from "../asset/music/kunmo/김건모 AI -I MISS YOU(원곡_서지원).mp3";
//songimg
import simg1 from "../asset/music/song1.png";
import simg2 from "../asset/music/song2.png";
import simg3 from "../asset/music/song3.png";
import simg4 from "../asset/music/song4.png";
import simg5 from "../asset/music/song5.png";
import simg6 from "../asset/music/song6.png";
import simg7 from "../asset/music/song7.png";
import simg8 from "../asset/music/song8.png";
import simg9 from "../asset/music/song9.png";

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
  background-image: url(${(props) => props.image || ""});
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
  top: 30%;
  left: 400px;
  padding-top: 100px;
  padding-left: 100px;
`;

const NextButton = styled(NavButton)`
  bottom: 15%;
  left: 400px;
  padding-bottom: 100px;
  padding-left: 100px;
`;

const songs = [
  {
    title: "I MISS YOU",
    singer: "서지원",
    src: [imissyouKanavon, imissyouKunmo],
    image: [kanabon, kunmo],
    ai: [kanabon, kunmo],
    button: ["kanabon", "kunmo"],
    songimg: [simg1],
  },
  {
    title: "Hey Hey Hey",
    singer: "김윤아",
    src: [heyKanavon, heyKunmo],
    image: [kanabon, kunmo],
    ai: [kanabon, kunmo],
    button: ["kanabon", "kunmo"],
    songimg: [simg2],
  },
  {
    title: "잘못된 만남",
    singer: "김건모",
    src: [namJiwon, namKanavon],
    image: [jiwon, kanabon],
    ai: [jiwon, kanabon],
    button: ["jiwon", "kanabon"],
    songimg: [simg3],
  },
  {
    title: "바람이 분다",
    singer: "이소라",
    src: [bondaYuna],
    image: [yuna],
    ai: [yuna],
    button: ["yuna"],
    songimg: [simg4],
  },
  {
    title: "엄마가 딸에게",
    singer: "양희은",
    src: [momYuna],
    image: [yuna],
    ai: [yuna],
    button: ["yuna"],
    songimg: [simg5],
  },
  {
    title: "화장을 고치고",
    singer: "왁스",
    src: [makeYuna],
    image: [yuna],
    ai: [yuna],
    button: ["yuna"],
    songimg: [simg6],
  },
  {
    title: "바램",
    singer: "토이",
    src: [toyJiwon],
    image: [jiwon],
    ai: [jiwon],
    button: ["jiwon"],
    songimg: [simg7],
  },
  {
    title: "미안해 널 미워해",
    singer: "김윤아",
    src: [sorryJiwon],
    image: [jiwon],
    ai: [jiwon],
    button: ["jiwon"],
    songimg: [simg9],
  },
  {
    title: "깊은 밤을 날아서",
    singer: "이문세",
    src: [nightKunmo],
    image: [kunmo],
    ai: [kunmo],
    button: ["kunmo"],
    songimg: [simg8],
  },
];
const Music = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleWheel = (event) => {
    if (event.deltaY > 0) {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % songs.length);
    } else {
      setCurrentIndex(
        (prevIndex) => (prevIndex - 1 + songs.length) % songs.length
      );
    }
  };

  const handlePrevClick = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + songs.length) % songs.length
    );
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % songs.length);
  };

  const renderSongTitles = () => {
    const visibleSongs = [];
    for (let i = 0; i < 5; i++) {
      visibleSongs.push(songs[(currentIndex + i) % songs.length]);
    }

    const angleIncrement = 130 / (visibleSongs.length - 1);
    const radius = 300;

    return visibleSongs.map((song, index) => {
      const angle = index * angleIncrement - 90;
      const topPosition = `calc(50% - ${
        radius * Math.cos((angle * Math.PI) / 180)
      }px)`;
      const leftPosition = `calc(50% + ${
        radius * Math.sin((angle * Math.PI) / 180)
      }px)`;

      return index === 2 ? (
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

  const safeIndex = (currentIndex + 2) % songs.length;
  const songImage = songs[safeIndex]?.songimg[0] || ""; // 현재 곡의 songimg를 배경 이미지로 설정

  return (
    <Container onWheel={handleWheel}>
      {renderSongTitles()}
      <ImgBox image={songImage} />
      <ImgBoxBack src={gra} alt="a" />
      <h3>AI Vocal Cloning</h3>
      <PrevButton onClick={handlePrevClick}>
        {/* <FontAwesomeIcon icon={faChevronUp} /> */}
        {/* PREV */}
      </PrevButton>
      <NextButton onClick={handleNextClick}>
        {/* NEXT */}
        {/* <FontAwesomeIcon icon={faChevronDown} /> */}
      </NextButton>
    </Container>
  );
};

export default Music;
