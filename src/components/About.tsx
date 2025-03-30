import React, { useEffect, useState } from "react";
import { styled } from "styled-components";
import { ReactSVG } from "react-svg";
import { BsChevronCompactDown } from "react-icons/bs";
import { IconType } from "react-icons";
import { IconLink } from "./common/IconLink";
import { Container } from "../styles/Container";


const AboutContainer = styled(Container)`
    display: flex;
    position: relative;
    padding-top: 7%;
    height: 60vh;
    
    @media (max-width: 858px){
        height: 65vh;
    }

    @media (max-width: 430px){
        padding-top: 10%;
        flex-direction: column;
        height: 600px;
    }
`;

const Title = styled.div`
    word-break:keep-all
`;

const TitleText = styled.span`
    font-optical-sizing: auto;
    font-weight: 100;
    font-style: normal;
    font-size: ${({ theme }) => theme.fontSizes.title};
    
    @media (max-width: 858px){
        font-size: ${({ theme }) => theme.fontSizes.mdTitle};
    }
`;
    
const Cursor = styled.span`
    
    border-left: 2px solid #000;
    animation: blink 2.7s infinite;
    display: inline-block;
    margin-left: 2px;
    height: ${({ theme }) => theme.fontSizes.title};
    vertical-align: bottom;
    
    @media (max-width: 858px){
        height: ${({ theme }) => theme.fontSizes.mdTitle};
    }
        
    @keyframes blink {
        0% {
        opacity: 1;
        }
        50% {
        opacity: 0;
        }
        100% {
        opacity: 1;
        }
    }

`;

const Desc = styled.div`
    line-height: 25px;
    margin-top: 20px;
    font-size: ${({ theme }) => theme.fontSizes.md};
    font-family: "Montserrat", sans-serif;
    `;
    
const Name = styled.span`
    font-size: ${({ theme }) => theme.fontSizes.lg};
    font-weight: 500;
`;

const Intro = styled.div`
    height: 100%;
`;
    

const ImgDiv = styled.div`
    max-width: 350px;
    height: 100%;
    display:flex;
    flex-direction: column;
    justify-content: space-between;
    overflow: hidden;
    margin-left: auto;

    @media (max-width: 858px) { 
        justify-content: center;
    }

    @media (max-width: 430px){
        flex-direction: initial;
        align-items: self-end;
        margin: 0;

        img{
            height: 125px;
        }
    }
`;
    
const MimoIcon = styled.img`
    //width: 100%;
    max-height: 300px;
`;
    
const ContactIcon = styled.div`
    display:flex;
    justify-content: right;
    height: 50px;
    width: 100%;
    
`;  

const ScrollDown = styled.div`
    margin-top: 30px;
	position: relative;
	animation: down 3.0s infinite;
	-webkit-animation: down 2.5s infinite;  
	
    svg{
        cursor: pointer;
    }

    @keyframes down {
        0% {
          transform: translateY(0);
        }
        100% {
          transform: translateY(10px);
        }
      }

`;


const Icon: IconType = BsChevronCompactDown;

export const About:React.FC = () => {

    const text = "Full-stack developer, Seryeong";
    const [displayText, setDisplayText] = useState<string>(''); 
    const [index, setIndex] = useState<number>(0); 

    const speed = 100;

    useEffect(() => {
        if (index < text.length) {
        const timeout = setTimeout(() => {
            setDisplayText((prevText) => prevText + text.charAt(index));
            setIndex(index + 1);
        }, speed);
        return () => clearTimeout(timeout); 
        }
    }, [index, text, speed]);

    return (
        <>
        <AboutContainer>
            <Intro>
                <Title>
                    <TitleText id="text">{ displayText }</TitleText>
                    <Cursor/>
                </Title>
                <Desc>
                    I've been working as a full-stack web developer since 2022,
                    specializing in Java and JavaScript. <br/>
                    I’m always eager to learn new technologies to advance my career, <br/>
                    so I’ve been studying React and TypeScript on my own. <br/>
                    I look forward to working with you!
                    {/* My core programming skills are JavaScript and Java. <br/>
                    I specialize in building modern web applications using Spring. <br/>
                    And I've been learning React.js and Typescript. */}

                </Desc>
            </Intro>
            <ImgDiv>
                <MimoIcon src="/img/mainImg.png" alt="MyMimoticon"/>
                <ContactIcon>
                    <IconLink href="https://github.com/kimseryeong" src="/img/github-logo.svg"></IconLink>
                    <IconLink href="mailto:kxxoo322@gmail.com" src="/img/mail-logo.svg"></IconLink>
                </ContactIcon>
            </ImgDiv>
        </AboutContainer>

        <ScrollDown>
            <ReactSVG src="/img/down-arrow.svg" />
        </ScrollDown>
        </>
    )
}