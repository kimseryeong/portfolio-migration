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
    font-size: 25px;
    font-weight: 700;
    display: inline-block;
`;



export const Title:React.FC<TitleProps> = ({ text }) => {
    return (
        <StyledTitle>
            <StyledText >{ text }</StyledText>
        </StyledTitle>

    );
}