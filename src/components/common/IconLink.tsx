import React from "react";
import styled from "styled-components";
import { ReactSVG } from "react-svg";

type IconProps = {
    href: string;
    src: string;
}

const IconContatiner = styled.a`
    padding-left: 20px;

    .logo:hover{
        fill: ${({theme}) => theme.colors.primary};
        cursor: pointer;
      }
`;

export const IconLink:React.FC<IconProps> = ({ href, src }) => {
    return (
        <IconContatiner href={ href } target="_blank">
            <ReactSVG src={ src }></ReactSVG>
        </IconContatiner>
    );
}