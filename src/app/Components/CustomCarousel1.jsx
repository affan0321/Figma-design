"use client";

import React, { useEffect, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CustomCarousel1 = () => {
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
        "./image 62.png",
        "./image 63.png",
        "./image 64.png",
        "./image 65.png",
        "./image 66.png",
        "./image 67.png",
        "./image 68.png"
    ];

    return (
        <div className="container" style={{ marginBottom: "30px", marginTop: "30px" }}>
            <div className="slick marquee">
                <Slider ref={sliderRef} {...settings}>
                    {images.map((src, index) => (
                        <div key={index} className="slick-slide">
                            <div style={{ background: "linear-gradient(to right, rgba(146, 193, 60, 0.5), rgba(43, 154, 193, 0.5))", width: "200px", height: "70px", alignItems: "center", borderRadius: "20px" }} className="inner">
                                <img style={{ objectFit: "contain", width: "100%", height: "100%", paddingBlock: "10px" }} src={src} alt={`Slide ${index + 1}`} />
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

export default CustomCarousel1;
