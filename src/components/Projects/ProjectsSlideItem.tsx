import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { ProjectProps } from "../../Model/PjtDataType";
import { IconLink } from "../common/IconLink";
import { ImgSlider } from "./ImgSlier";

const ProjectContainer = styled.div`
    background: #fff;
    border-radius: 20px;
    margin: 10px 40px;
    padding: 20px;
    height: 75vh;//520px;
    box-shadow: 5px 5px 10px rgb(0,0,0,0.1);
    display: flex;
    flex-direction: column;
    
    @media (max-width: 430px){
        height: 480px;
        margin: 5px 0;
    }
`;
    
const SlideTitle = styled.span`
    display: flex;
    justify-content: center;
    margin: 10px 0;
    font-size: ${({ theme }) => theme.fontSizes.lg};
    font-weight: 500;
    line-height: normal;
    box-shadow: ${({ theme }) => theme.colors.primary} 0px -11px inset;
    
    @media (max-width: 430px){
        font-size: ${({ theme }) => theme.fontSizes.md};
    }
`;

const ImgDiv = styled.div`
    width: 100%;
    height: 215px;
    line-height: 215px;
    overflow: hidden;
    position: relative;
    display: inline-block;
    align-items: center;
    border: 1px solid #efefef;
    
    .slick-list{
        vertical-align: middle;
    }
    
    @media (max-width: 430px){
        height: 150px;
        line-height: 150px;
    }
`;
    
const Desc = styled.p`
    //height: 7%;
    font-size: ${({ theme }) => theme.fontSizes.xs};
    
    @media (max-width: 430px){
        height: 10%;
        font-size: ${({ theme }) => theme.fontSizes.xxs};
    }
`;

const Roles = styled.div`
    height: 35px;
    display: flex;
    align-items: center;
    font-size: ${({ theme }) => theme.fontSizes.sm};
    
    @media (max-width: 430px){
        height: 30px;
        font-size: ${({ theme }) => theme.fontSizes.xs};
    }
`;

const RoleItem = styled.span`
    padding: 4px 10px;
    display: flex;
    align-items: center;
    background-color: ${({ theme }) => theme.colors.primary};
    border-radius: 20px;
    margin-left: 5px;
`;

const GitLink = styled.div`
    display: flex;
`;

const BottomDiv = styled.div`
    margin-top: auto;
    flex: 0 0 auto;
`;

const Bottoms = styled.div`
    display: flex;
    font-size: ${({ theme }) => theme.fontSizes.xs};
    margin: 10px 0;
    justify-content: space-between;
    align-items: center;
`;

const Types = styled.div`
    margin-right:auto;
`;

const Dates = styled.div`
    margin-left:auto;
`;

const FeaturesDiv = styled.div`
    text-align: left;
    display: flex;
    flex-direction: column;
`;

const FeaturesList = styled.ul`
    line-height: 1.6;
    padding: 0;
    margin: 10px;
    
    list-style: none;
    height: 23%;
    font-size: ${({ theme }) => theme.fontSizes.sm};

    @media (max-width: 430px){
        font-size: ${({ theme }) => theme.fontSizes.xxs};
    }
`;

const FeatItem = styled.li`
    display: flex;

    span {
        margin-right: 5px;
    }
`;

const FeaturesButton = styled.button`
    padding-left: 30px;
    background-color: transparent;
    border: transparent;
    text-align: left;
    font-weight: 700;
    margin-top: auto;
    flex: 0 0 auto;
    
    &:hover{
        cursor: pointer;
        color: ${({theme}) => theme.colors.secondary};

    }
`;

export const SlideItem:React.FC<ProjectProps> = ( {title, sub, imgs, type, startDate, endDate, roles, features, skills, desc, git} ) => {
    const [showAll, setShowAll] = useState(false);
    const [limit, setLimit] = useState(5);

    useEffect(() => {
        const handleResize = () => {
          if (window.innerWidth <= 768) {
            setLimit(2); // mobile
          } else {
            setLimit(5); // PC
          }
        };
    
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
      }, []);

    const displayedFeatures = showAll ? features : features.slice(0, limit);

    return (
        <ProjectContainer>
            <SlideTitle>{ title }</SlideTitle>
                <Desc>{ desc }</Desc>
            <ImgDiv>
                <ImgSlider imgs={imgs}/>
            </ImgDiv>
            <FeaturesDiv>
                <FeaturesList>
                    { displayedFeatures.map( (feat, index) => 
                        feat ? (
                            <FeatItem key={index}>
                                <span>✔️ </span> {feat}
                            </FeatItem>
                        ) : null
                    )}    
                </FeaturesList>
                {features.length > limit && (
                    <FeaturesButton onClick={() => setShowAll(!showAll)}>
                    {showAll ? '▲' : `+ ${features.length - limit} more`}
                    </FeaturesButton>
                )}
            </FeaturesDiv>

            <BottomDiv>
                <Bottoms>
                    <Roles>
                        👩🏻‍💻 { roles.map((role) =>
                            role ? (
                                <RoleItem>{ role }</RoleItem>
                            ) : null
                        )}
                    </Roles>
                    <GitLink>
                    { git.map( url => 
                        url ? (
                        <IconLink href={ url } src="/img/github-logo.svg"></IconLink>
                        ) : null
                    )}
                    </GitLink>
                </Bottoms>
                <Bottoms>
                    <Types>{ type }</Types>
                    <Dates>{startDate} ~ {endDate}</Dates>
                </Bottoms>
            </BottomDiv>
        </ProjectContainer>
    );
}