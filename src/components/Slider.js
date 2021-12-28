import React from "react";
import Slider from "react-slick";
import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function SimpleSlider() {
  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };
  return (
    <Carousel {...settings}>
      <ImgContainer>
        <img src="images/slider-badag.jpg" alt="" />
      </ImgContainer>
      <ImgContainer>
        <img src="images/slider-badging.jpg" alt="" />
      </ImgContainer>{" "}
      <ImgContainer>
        <img src="images/slider-scale.jpg" alt="" />
      </ImgContainer>
      <ImgContainer>
        <img src="images/slider-scales.jpg" alt="" />
      </ImgContainer>
    </Carousel>
  );
}

const Carousel = styled(Slider)`
  width: 90%;
  margin: 0 auto;

  ul li button {
    &::before {
      font-size: 0.8rem;
      color: grey;
    }
  }

  li.slick-active button::before {
    color: white;
  }

  .slick-list {
    overflow: visible;
  }

  button {
    z-index: 1;
  }
`;

const ImgContainer = styled.div`
  border: 3px solid #2b3041;
  border-radius: 0.5rem;
  transition: all 0.25s ease;
  img {
    width: 100%;
    box-shadow: rgb(0, 0, 0) 0px 20px 30px -10px;
  }
  &:hover {
    border: 3px solid var(--hover-white);
  }
`;
