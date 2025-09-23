import React from "react";
import { Container } from "../styles/Container";
import { Title } from "./common/Title";
import styled from 'styled-components';
import { TechStackItem } from "./TechStackItem";
import StackIcon from "tech-stack-icons";

const SkillContainer = styled(Container)`
    .tsi {
        display: inline-block;
        filter: drop-shadow(5px 5px 10px rgba(90, 89, 89, 0.5));
    }

    span {
        margin: 15px;
    }
`;

const Contents = styled.div`
display: flex;
`;

export const Skills: React.FC = () => {
    return (
        <SkillContainer>
            <Title text={ "🔑 Skills" }/>
            <StackIcon name="java" />
            <StackIcon name="js" />
            <StackIcon name="react" />
            <StackIcon name="typescript" />
            <StackIcon name="postgresql" />
            <StackIcon name="mysql" />
            <StackIcon name="spring" />
            <StackIcon name="git" />
            <StackIcon name="github" />
            <StackIcon name="gitlab" />
            <StackIcon name="netlify" />
            <StackIcon name="supabase" />
        </SkillContainer>
    );
}