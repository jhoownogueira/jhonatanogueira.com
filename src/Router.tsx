import { Routes, Route } from 'react-router-dom';
import { Home } from './Componentes/Home/Home';
import { Portifolio } from './Componentes/Portifolio/Portifolio';

export function Router() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/portifolio" element={<Portifolio />} />
        </Routes>
    )
}