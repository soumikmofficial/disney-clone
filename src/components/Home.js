import React from "react";
import styled from "styled-components";
import Slider from "./Slider";
import Viewers from "./Viewers";

function Home() {
  return (
    <Wrapper>
      <Slider />
      <Viewers />
    </Wrapper>
  );
}

const Wrapper = styled.main`
  min-height: calc(100vh - 75px);
  background-image: url("images/home-background.png");
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  padding: 3rem 2rem;
`;

export default Home;
