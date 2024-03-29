import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "./SlideShow.scss";
import image1 from "../../img/slide-show_1.avif";
import image2 from "../../img/slide-show_2.avif";
import image3 from "../../img/slide-show_3.avif";
import image4 from "../../img/slide-show_4.avif";
import image5 from "../../img/slide-show_5.avif";
import image6 from "../../img/slide-show_6.webp";

export const SlideShow = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const listImg = [image2, image1, image6, image3, image5, image4];
  return (
    <div className="slider-container">
      <Slider {...settings}>
        {listImg.map((item, index) => {
          return (
            <div key={index}>
              <img src={item} alt="" />
            </div>
          );
        })}
      </Slider>
    </div>
  );
};
