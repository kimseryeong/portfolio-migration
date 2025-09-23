import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { ProjectProps } from "../../Model/PjtDataType";
import { SlideItem } from "./ProjectsSlideItem";

const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    ssEase: "ease-in-out",
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1, 
          dots: false,
        },
      },
    ],
};


export const ProjectsSlider: React.FC = () => {
    const [projects, setProjects] = useState<ProjectProps[]>([]);
    const [isFetched, setIsFetched] = useState(false);

    useEffect(() => {
      fetch("/data/projects_en.json")
        .then((response) => response.json())
        .then((data) => {
          setProjects(data);
          setIsFetched(true);
        })
        .catch((error) => console.log("Error fetching projects.json", error))
    }, [isFetched]);


    return (
      <Slider {...settings}>
        { projects.map((pjt, idx) => (
          <SlideItem 
            key={pjt.title || idx}
            title={pjt.title} 
            sub={pjt.sub} 
            imgs={pjt.imgs} 
            type={pjt.type} 
            startDate={pjt.startDate} 
            endDate={pjt.endDate} 
            roles={pjt.roles} 
            features={pjt.features} 
            skills={pjt.skills} 
            desc={pjt.desc}
            git={pjt.git} 
            />
        )) }
      </Slider>
    );
}