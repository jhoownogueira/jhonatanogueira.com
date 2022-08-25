import { Container } from "./style";
import logoBlackImg from '../../assets/logojnblack.svg';


export function Footer() {
    return (
        <>
        <Container>
            <div className="content">
                <small>2022 © Jhonata Nogueira</small>
                <div className="logo">
                    <span>Desenvolvido por</span>
                    <img src={logoBlackImg} alt="Logotipo Jhonata Nogueira" />
                </div>
            </div>
        </Container>
        </>
    )
}