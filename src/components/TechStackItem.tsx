import React from "react";
import StackIcon from "tech-stack-icons";
import styled from 'styled-components';

type StackProps = {
    name: string;
}

const ItemContents = styled.div`
    display: flex;
    flex-direction: column;
    margin: 10px;
    width: 100px;
    text-align: center;
    font-size: ${({ theme }) => theme.fontSizes.sm};
`;

export const TechStackItem:React.FC<StackProps> = ({ name }) => {
    return (
        <ItemContents>
            <StackIcon name={name} />
            <span>{name}</span>
        </ItemContents>
    )
}