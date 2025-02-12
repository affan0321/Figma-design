"use client";

import React, { useEffect, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const MarqueeReverse = () => {
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
        arrows: false,
        rtl: true,
    };

    const images = [
        "./5.png",
        "./6.png",
        "./7.png",
        "./8.png",
    ];

    return (
        <div className="container">
            <h1>Slick Marquee Reverse</h1>
            <div className="slick marquee">
                <Slider ref={sliderRef} {...settings}>
                    {images.map((src, index) => (
                        <div key={index} className="slick-slide">
                            <div className="inner">
                                <img src={src} alt={`Slide ${index + 1}`} width="350" height="204"  />
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

export default MarqueeReverse;
