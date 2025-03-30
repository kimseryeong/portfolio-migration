import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "styled-components";

type ImgProps = {
    imgs: string[];
}

const StyledSlider = styled(Slider)`

    width: 100%;
    height:100% !important;
    position: relative;
    
    .slick-track {
        height: 100% !important;
    }

    .slick-slide div{
        transform: translateY(10px);
        height: 100% !important;
    }
`;

export const ImgSlider:React.FC<ImgProps> = ({ imgs }) => {
    
    const settings = {
        dots: false,
        arrows: false,
        infinite: imgs.length > 1,
        speed: 200,
        cssEase: "ease-in-out",
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: imgs.length > 1,
        autoplaySpeed: 4500,
      };

    return (
        <StyledSlider {...settings}>
            { imgs.map((src) => (
                <img 
                    src={src ? src : 'img/error.png'} 
                    style={{ 
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                    }} 
                    alt={'⚠️'}
                />
            ))}
        </StyledSlider>
    );
}   