import React from "react";
import styled from "styled-components";
import Slider from "./Slider";

function Home() {
  return (
    <Wrapper>
      <Slider />
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
  padding-top: 3rem;
`;

export default Home;
