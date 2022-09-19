import { Footer } from './Componentes/Footer/Footer';
import { Header } from './Componentes/Header/Header';
import { BrowserRouter } from 'react-router-dom';

import { GlobalStyle } from './StylesGlobals/global';
import { Router } from './Router';

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