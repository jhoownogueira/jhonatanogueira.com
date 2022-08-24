import { SectionAboutMe } from "./style";
import htmlImg from '../../../assets/card-tecnology-html.svg';
import cssImg from '../../../assets/card-tecnology-css.svg';
import jsImg from '../../../assets/card-tecnology-js.svg';
import tsImg from '../../../assets/card-tecnology-ts.svg';
import reactImg from '../../../assets/card-tecnology-react.svg';
import jhoowImg from '../../../assets/jhonatanogueira.png';

export function AboutMe() {
    return (
        <SectionAboutMe>
            <div className="content">
                <div className="left-container">
                    <h1>Olá</h1>
                    <span>Eu me chamo Jhonata, mas você pode me chamar de Jhoow! 👋</span>
                    <p>
                        Sou formado em Arquitetura, mas sou apaixonado por tecnologia.
                        Atualmente estou estudando desenvolvimento 
                        Front-end, HTML, CSS, Javascript, Typescript e React.
                    </p>
                    <ul>
                        <li>
                            <div className="icon">
                                <img src={htmlImg} alt="Ícone HTML" />
                            </div>
                        </li>
                        <li>
                            <div className="icon">
                                <img src={cssImg} alt="Ícone CSS" />
                            </div>
                        </li>
                        <li>
                            <div className="icon">
                                <img src={jsImg} alt="Ícone Javascript" />
                            </div>
                        </li>
                        <li>
                            <div className="icon">
                                <img src={tsImg} alt="Ícone Typescript" />
                            </div>
                        </li>
                        <li>
                            <div className="icon">
                                <img src={reactImg} alt="Ícone ReactJs" />
                            </div>
                        </li>
                    </ul>
                </div>
    
                <div className="right-container">
                    <div className="image-box">
                        <img src={jhoowImg} alt="Jhonata Nogueira" />
                    </div>
                </div>
            </div>
        </SectionAboutMe>
    );
}