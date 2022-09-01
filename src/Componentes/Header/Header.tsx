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
                            <a href="https://github.com">Sobre mim</a>
                        </li>
                        <li>
                            <a href="https://github.com">Portifólio</a>
                        </li>
                        <li>
                            <a href="https://github.com">Contato</a>
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