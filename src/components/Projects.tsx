import React from "react";
import { ProjectsSlider } from "./Projects/ProjectsSlider";
import { Title } from "./common/Title";
import { Container } from "../styles/Container";

export const Projects: React.FC = () => {
    return (
        <Container>
            <Title text = { "🗂️ Toy Projects" } />
            <ProjectsSlider />
        </Container>
    )
}