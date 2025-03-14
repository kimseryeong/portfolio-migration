import React from "react";
import styled from "styled-components";
import { Slick } from "./Projects/Slick";
import { Title } from "./common/Title";



const PjtContainer = styled.div`
    margin: 30px 150px;
    
    @media (max-width: 768px) { 
        margin: 30px 100px;
    }

`;


export const Projects: React.FC = () => {
    return (
        <PjtContainer>
            <Title text = {"🗂️ Toy Projects"} />
            <Slick />
        </PjtContainer>
    )
}