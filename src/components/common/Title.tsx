import React from "react";
import styled from "styled-components";

type TitleProps = {
    text: string;
}

const StyledTitle  = styled.div`
    text-align: left;
    margin: 20px 0;
`;

const StyledText = styled.span`
    font-size: ${({ theme }) => theme.fontSizes.xl};
    font-weight: 700;
    display: inline-block;
    
    @media(max-width: 480px){
        font-size: ${({ theme }) => theme.fontSizes.lg};
    }
`;

export const Title:React.FC<TitleProps> = ({ text }) => {
    return (
        <StyledTitle>
            <StyledText >{ text }</StyledText>
        </StyledTitle>

    );
}