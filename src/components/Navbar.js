import React from "react";
import styled from "styled-components";

function Navbar() {
  return (
    <Wrapper>
      <Logo>
        <a href="#">
          <img src="images/logo.svg" alt="disney logo" />
        </a>
      </Logo>
      <Menu>
        <a href="#">
          <img src="images/home-icon.svg" alt="" />
          <span>home</span>
        </a>
        <a href="#">
          <img src="images/search-icon.svg" alt="" />
          <span>search</span>
        </a>
        <a href="#">
          <img src="images/watchlist-icon.svg" alt="" />
          <span>watchlist</span>
        </a>
        <a href="#">
          <img src="images/original-icon.svg" alt="" />
          <span>originals</span>
        </a>
        <a href="#">
          <img src="images/movie-icon.svg" alt="" />
          <span>movie</span>
        </a>
        <a href="#">
          <img src="images/series-icon.svg" alt="" />
          <span>series</span>
        </a>
      </Menu>
      <UserImg>
        <img src="images/avatar.svg" alt="" />
      </UserImg>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100vw;
  padding: 0 4rem;
  background: var(--bg-col);
  height: 7rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Logo = styled.div`
  img {
    width: 6rem;
  }
`;
const Menu = styled.div`
  display: flex;
  gap: 1.5rem;
  a {
    display: flex;
    align-items: center;

    img {
      width: 2rem;
      @media (max-width: 860px) {
        width: 3rem;
      }
    }
    span {
      margin-left: 0.3rem;
      font-size: 1.3rem;
      color: white;
      text-transform: uppercase;

      @media (max-width: 860px) {
        display: none;
      }
    }
  }
`;
const UserImg = styled.div`
  display: flex;
  align-items: center;
  /* margin-left: auto; */
  img {
    width: 5rem;
    border-radius: 50%;
  }
`;

export default Navbar;
