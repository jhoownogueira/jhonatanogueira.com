import { Link } from 'react-router-dom';

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
                </div>
            </div>
        </Container>
    )
}