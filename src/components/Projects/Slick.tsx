import React, { useEffect, useState } from "react";
import styled from 'styled-components';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { ProjectProps } from "../../Model/TypeProjects";
import { SlideItem } from "./SlideItem";

const StyledSlider = styled(Slider)`
  .slick-slide div{
    outline: none;
  }
`;

const settings = {
    dots: true,
    infinite: true,
    speed: 100,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1200, // 화면 너비가 768px 이하일 때
        settings: {
          slidesToShow: 1, // 1개만 표시
        },
      },
      {
        breakpoint: 480, // 480px 이하 (스마트폰)
        settings: {
          slidesToShow: 1, // 1개 표시
          dots: false, // 하단 dot 없애기 (선택 사항)
        },
      },
    ],
};


export const Slick: React.FC = () => {
    const [projects, setProjects] = useState<ProjectProps[]>([]);
    const [isFetched, setIsFetched] = useState(false);

    useEffect(() => {
      fetch("/data/projects.json")
        .then((response) => response.json())
        .then((data) => {
          setProjects(data);
          setIsFetched(true);
        })
        .catch((error) => console.log("Error fetching projects.json", error))
    }, [isFetched]);


    return (
        <div>
          <StyledSlider {...settings}>
            { projects.map((pjt) => (
              <SlideItem 
                title={pjt.title} 
                type={pjt.type} 
                description={pjt.description}/>
            )) }
          </StyledSlider>
        </div>
    );
}