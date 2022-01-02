import React, { useEffect } from "react";
import styled from "styled-components";
import Slider from "./Slider";
import Viewers from "./Viewers";
import Movies from "./Movies";

function Home() {
  return (
    <Wrapper>
      <Slider />
      <Viewers />
      <Movies />
    </Wrapper>
  );
}

const Wrapper = styled.main`
  min-height: calc(100vh - 75px);
  padding: 3rem calc(3.5vw + 5px);
  background-image: url("images/home-background.png");
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
`;

export default Home;
