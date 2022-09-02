import { Footer } from './Componentes/Footer/Footer';
import { Header } from './Componentes/Header/Header';
import { BrowserRouter } from 'react-router-dom';

import { GlobalStyle } from './Styles/global';
import { Router } from './assets/Router';

export function App() {
  return (
    <>
    <GlobalStyle />
    <BrowserRouter>
      <Header />
      <Router />
      <Footer />
    </BrowserRouter>
    </>
  );
}