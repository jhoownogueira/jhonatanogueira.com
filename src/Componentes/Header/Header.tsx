import { useState } from 'react';
import { NavLink } from 'react-router-dom';

import logoHeader from '../../assets/logoheader.svg';

import { MobileButton, PrimaryButton } from '../../StylesGlobals/StylesComponents';
import { Container } from './styles';



export function Header() {
    const [isActive, setIsActive] = useState(false);

    return (
        <Container>
            <div className='content'>
                <img src={logoHeader} alt="Logotipo Jhonata Nogueira" />
                <nav className='right-container'>
                    <ul>
                        <li>
                            <NavLink to='/'>Sobre mim</NavLink>
                        </li>
                        <li>
                            <NavLink to='/portifolio'>Portifólio</NavLink>
                        </li>
                        <li>
                            <NavLink to='/contato'>Contato</NavLink>
                        </li>
                    </ul>
                    <PrimaryButton>
                        <span>Fale comigo</span>
                    </PrimaryButton>
                </nav>
                <MobileButton 
                    onClick={() => { setIsActive(!isActive) }}
                    isActive={isActive}
                >
                    <div className='top-bullet'></div>
                    <div className='mid-bullet'></div>
                    <div className='bottom-bullet'></div>
                </MobileButton>
                <nav className={isActive ? 'mobile-menu open' : 'mobile-menu'}>
                    <ul>
                        <li>
                            <NavLink to='/'>Sobre mim</NavLink>
                        </li>
                        <li>
                            <NavLink to='/portifolio'>Portifólio</NavLink>
                        </li>
                        <li>
                            <NavLink to='/contato'>Contato</NavLink>
                        </li>
                    </ul>
                </nav>
            </div>
        </Container>
    )
}