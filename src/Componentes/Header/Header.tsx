import { useState } from 'react';
import { Link } from 'react-router-dom';

import logoHeader from '../../assets/logoheader.svg';

import { MobileButton, PrimaryButton } from '../../Styles/StylesComponents';
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
                            <Link to='/'>Sobre mim</Link>
                        </li>
                        <li>
                            <Link to='/portifolio'>Portifólio</Link>
                        </li>
                        <li>
                            <Link to='/contato'>Contato</Link>
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
                            <Link to='/'>Sobre mim</Link>
                        </li>
                        <li>
                            <Link to='/portifolio'>Portifólio</Link>
                        </li>
                        <li>
                            <Link to='/contato'>Contato</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </Container>
    )
}