import React from "react";
import styled from "styled-components";

function Details() {
  return (
    <Wrapper>
      <Background>
        <img src="images/slider-badag.jpg" alt="" />
      </Background>
      <Title>
        <h1>The Title</h1>
      </Title>
      <Buttons>
        <PlayBtn>
          <img src="images/play-icon-black.png" alt="play icon" />
          <span>play</span>
        </PlayBtn>
        <TrailerBtn>
          <img src="images/play-icon-white.png" alt="play icon" />
          <span>trailer</span>
        </TrailerBtn>
        <AddBtn>
          <span>+</span>
        </AddBtn>
        <GroupBtn>
          <img src="images/group-icon.png" alt="" />
        </GroupBtn>
      </Buttons>
      <Subtitle>2018 : Children, Fantasy, Drama</Subtitle>
      <Description>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
        asperiores iure magnam voluptates officia rem soluta explicabo maiores
        dolore perspiciatis!Lorem ipsum dolor sit amet consectetur adipisicing
        elit. Doloribus asperiores iure magnam voluptates officia rem soluta
        explicabo maiores dolore perspiciatis!
      </Description>
    </Wrapper>
  );
}

export default Details;

const Wrapper = styled.div`
  min-height: calc(100vh - 75px);
  padding: 3rem calc(3.5vw + 5px);
  position: relative;
`;

const Background = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: -1;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const Title = styled.div``;

const Buttons = styled.div`
  top: 10rem;
  display: flex;
  align-items: center;
  gap: 1.5rem;
  margin: 5rem 0 3rem;
`;

const PlayBtn = styled.button`
  display: flex;
  background: hsla(0, 0%, 100%, 0.8);
  align-items: center;
  justify-content: center;
  padding: 1rem;
  text-transform: uppercase;
  border-radius: 0.4rem;
  letter-spacing: 0.2rem;
  transition: var(--ease-quick);

  cursor: pointer;
  border: none;

  img {
    width: 30%;
    margin-right: 1rem;
  }

  &:hover {
    opacity: 0.9;
    background: var(--hover-grey);
  }
`;

const TrailerBtn = styled(PlayBtn)`
  background: var(--bg-col-3);
  border: 1px solid var(--border-white);

  color: white;
  img {
    width: 18%;
  }
  &:hover {
    background: var(--hover-3);
    border: 1px solid white;
  }
`;

const AddBtn = styled.button`
  background: var(--bg-col-4);
  border: 1px solid white;
  color: white;
  height: 3.8rem;
  font-size: 3rem;
  width: 3.8rem;
  border-radius: 50%;
  border: 1px solid var(--border-white);
  transition: var(--ease-quick);
  cursor: pointer;

  &:hover {
    background: var(--hover-3);
    border: 1px solid white;
  }
`;

const GroupBtn = styled(AddBtn)`
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    width: 80%;
  }
`;

const Subtitle = styled.div`
  margin-bottom: 1rem;
  font-size: 1.3rem;
`;
const Description = styled.div`
  width: clamp(100px, 100%, 500px);
  font-size: 1.6rem;
  font-family: var(--body-font);
  line-height: 1.4;
`;
