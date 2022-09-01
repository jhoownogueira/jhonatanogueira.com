import React from 'react';
import logoHeader from '../../assets/logoheader.svg';
import { PrimaryButton } from '../../Styles/StylesComponents';
import { Container } from './styles';

export function Header() {
    return (
        <Container>
            <div className='content'>
                <img src={logoHeader} alt="Logotipo Jhonata Nogueira" />
                <div className='right-container'>
                    <ul>
                        <li>
                            <a href="#">Sobre mim</a>
                        </li>
                        <li>
                            <a href="#">Portifólio</a>
                        </li>
                        <li>
                            <a href="#">Contato</a>
                        </li>
                    </ul>
                    <PrimaryButton>
                        <span>Fale comigo</span>
                    </PrimaryButton>
                </div>
            </div>
        </Container>
    )
}