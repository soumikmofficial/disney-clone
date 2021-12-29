import React from "react";
import styled from "styled-components";

function Movies() {
  return (
    <Wrapper>
      <h4>recommended for you</h4>
      <Content>
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
        <ImgContainer>
          <img src="images/viewers-national.png" alt="" />
        </ImgContainer>
        <ImgContainer>
          <img src="images/viewers-national.png" alt="" />
        </ImgContainer>
        <ImgContainer>
          <img src="images/viewers-national.png" alt="" />
        </ImgContainer>
      </Content>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  margin-top: 2rem;
  h4 {
    text-transform: capitalize;
    margin-bottom: 2rem;
  }
`;

const Content = styled.div`
  /* margin-top: 2rem; */
  /* padding: 3rem 0 2rem; */
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  grid-gap: 1rem;
`;
const ImgContainer = styled.div`
  cursor: pointer;
  border: 3px solid var(--viewers-border);
  border-radius: 1rem;
  box-shadow: var(--shadow-2);
  transition: all 0.25s ease;
  margin-bottom: 1rem;
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
export default Movies;
