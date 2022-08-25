import React from 'react';
import { Header } from './Componentes/Header/Header';
import { Home } from './Componentes/Home/Home';
import { GlobalStyle } from './Styles/global';

export function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Home />
    </>
  );
}