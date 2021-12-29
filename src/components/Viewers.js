import React from "react";
import styled from "styled-components";

function Viewers() {
  return (
    <Wrapper>
      <ImgContainer>
        <img src="images/viewers-disney.png" alt="" />
      </ImgContainer>
      <ImgContainer>
        <img src="images/viewers-pixar.png" alt="" />
      </ImgContainer>
      <ImgContainer>
        <img src="images/viewers-starwars.png" alt="" />
      </ImgContainer>
      <ImgContainer>
        <img src="images/viewers-marvel.png" alt="" />
      </ImgContainer>
      <ImgContainer>
        <img src="images/viewers-national.png" alt="" />
      </ImgContainer>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  margin-top: 2rem;
  padding: 3rem 0 2rem;
  display: grid;
  grid-template-columns: repeat(5, minmax(0, 1fr));
  grid-gap: 1.5rem;
`;
const ImgContainer = styled.div`
  cursor: pointer;
  border: 3px solid var(--viewers-border);
  border-radius: 1rem;
  box-shadow: var(--shadow-1);
  transition: all 0.25s ease;
  img {
    width: 100%;
    height: 100%;
  }

  &:hover {
    transform: scale(1.05);
    border: 3px solid var(--hover-border);
    box-shadow: var(--hover-shadow);
  }
`;
export default Viewers;
