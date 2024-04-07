"use client";
import React from "react";
import { Fade } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const settings = {
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  dots: false,
};

const slides = [
  {
    url: "/images/slider-bg1.jpg",
    caption: "M75 Sport Watch",
    des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua.",
    price: 100,
  },
  {
    url: "/images/slider-bg2.jpg",
    caption: "Get the Best Deal on CCTV Camera",
    des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua.",
    price: 100,
  },
];

function HomeBanner() {
  return <></>;
}

export default React.memo(HomeBanner);
