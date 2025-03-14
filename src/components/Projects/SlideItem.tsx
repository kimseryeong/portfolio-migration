import React from "react";
import styled from "styled-components";
import { ProjectProps } from "../../Model/TypeProjects";

const ProjectContainer = styled.div`
    justify-content: center;
    align-items: center;
    height: 100px;
    background: #ddd;
    border-radius: 10px;
    margin: 20px 50px;
    padding: 20px;
    height: 400px;
    box-shadow: 5px 5px 10px rgb(0,0,0,0.1);
`;

const SlideTitle = styled.span`
    margin: 10px 0;
    font-size: 20px;
    font-weight: 400;
`;

const Desc = styled.p`

`;

const ImgDiv = styled.div`
    width: 100%;
    height: 250px;
    background-color: #eee;
`;

export const SlideItem:React.FC<ProjectProps> = ( {title, type, description} ) => {
    return (
        <ProjectContainer>
            <SlideTitle>{ title }</SlideTitle>
            <Desc>
                { description }
            </Desc>
            <ImgDiv></ImgDiv>
        </ProjectContainer>
    );
}