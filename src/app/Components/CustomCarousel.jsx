"use client";

import React, { useEffect, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CustomCarousel = () => {
    const sliderRef = useRef(null);

    useEffect(() => {
        if (sliderRef.current) {
            sliderRef.current.slickPlay();
        }
    }, []);

    const settings = {
        speed: 5000,
        autoplay: true,
        autoplaySpeed: 0,
        centerMode: true,
        cssEase: "linear",
        slidesToShow: 1,
        slidesToScroll: 1,
        variableWidth: true,
        infinite: true,
        initialSlide: 1,
        arrows: false
    };

    const images = [
        "./1.png",
        "./2.png",
        "./3.png",
        "./4.png",
    ];

    return (
        <div className="container">
            <h1>Slick Marquee Test</h1>
            <div className="slick marquee">
                <Slider ref={sliderRef} {...settings}>
                    {images.map((src, index) => (
                        <div key={index} className="slick-slide">
                            <div className="inner">
                                <img src={src} alt={`Slide ${index + 1}`} width="350" height="204" />
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
            <style jsx>{`
        h1 {
          text-align: center;
          margin: 40px 0;
          font-size: 40px;
          font-family: sans-serif;
          text-transform: uppercase;
          font-weight: bold;
        }
        .slick-slide .inner {
          margin: 0 15px;
        }
      `}</style>
        </div>
    );
};

export default CustomCarousel;
