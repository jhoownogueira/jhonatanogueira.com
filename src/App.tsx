import React from 'react';
import { Header } from './Componentes/Header/Header';
import { AboutMe } from './Componentes/Home/AboutMe/AboutMe';
import { GlobalStyle } from './Styles/global';

export function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <AboutMe />
    </>
  );
}