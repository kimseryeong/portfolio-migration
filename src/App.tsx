import React from 'react';
import { Header } from './components/Header';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import styled from 'styled-components';
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./styles/GlobalStyle";
import { theme } from './styles/theme';

const Container = styled.div`
  text-align: center;

  background: -webkit-linear-gradient(90deg, ${({theme}) => theme.colors.primary} 0%, ${({theme}) => theme.colors.secondary} 100%);
  width: 100%;

  display: flex;
  flex-direction: column;

  .logo:hover{
    fill: hsl(139deg 35.21% 61.95%);
    cursor: pointer;
  }
`;

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Container className="App">
        <GlobalStyle />
        <About />
        <Skills />
        <Projects />
      </Container>
    </ThemeProvider>
  );
}

export default App;
