import { 
    FollowMe,
         SectionAboutMe, 
         SectionFormation, 
         SectionSevices, 
         SectionTools 
        } from "./style";

import { CardFormation, CardTools } from "../../Styles/StylesComponents";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper";

import htmlImg from '../../assets/card-tecnology-html.svg';
import cssImg from '../../assets/card-tecnology-css.svg';
import jsImg from '../../assets/card-tecnology-js.svg';
import tsImg from '../../assets/card-tecnology-ts.svg';
import reactImg from '../../assets/card-tecnology-react.svg';
import jhoowImg from '../../assets/jhonatanogueira.png';

import codeBoostImg from '../../assets/courses/codeboost.png';
import frontStartImg from '../../assets/courses/frontstart.png';
import cursoFigmatImg from '../../assets/courses/cursodefigma.png';
import anhembiImg from '../../assets/courses/anhambimorumbi.png';
import adsGoogleImg from '../../assets/courses/adsgoogle.png';
import unifevImg from '../../assets/courses/unifev.png';

import interfacesImg from '../../assets/services/interfaces.svg';
import devImg from '../../assets/services/dev.svg';
import aplicationImg from '../../assets/services/aplication.svg';

import vscodeImg from '../../assets/tools/visual.png';
import githubImg from '../../assets/tools/github.png';
import figmaImg from '../../assets/tools/figma.png';
import psImg from '../../assets/tools/ps.png';
import ilustratorImg from '../../assets/tools/ilustrator.png';

import logoJnPurple from '../../assets/logojncolor.svg';
import linkedinPurple from '../../assets/socialmedia/linkedinpurple.svg';
import facebookPurple from '../../assets/socialmedia/facebookpurple.svg';
import instagramPurple from '../../assets/socialmedia/instagrampurple.svg';


export function Home() {
    return (
        <>
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

        <SectionFormation>
            <div className="content">
                <h2>Formação, cursos e certificados</h2>
                <Swiper 
                pagination={true} 
                modules={[Pagination]} 
                className="slider-courses"
                spaceBetween={16}
                slidesPerView={3.2}
                >
                    <SwiperSlide>
                        <CardFormation>
                        <div className="title">
                                <img src={codeBoostImg} alt="Codeboost" />
                                <h6>Codeboost William Moreira</h6>
                        </div>
                        <div className="info">
                            <p>Front-end. HTML, CSS, SASS, JS, GULP e React</p>
                            <span>2022</span>
                        </div>
                        </CardFormation>
                    </SwiperSlide>
                    <SwiperSlide>
                        <CardFormation>
                        <div className="title">
                                <img src={frontStartImg} alt="Codeboost" />
                                <h6>Frontstart Isadora Stangarlin</h6>
                        </div>
                        <div className="info">
                            <p>Front-end. HTML, CSS, LESS, JS e VUE</p>
                            <span>2022</span>
                        </div>
                        </CardFormation>
                    </SwiperSlide>
                    <SwiperSlide>
                        <CardFormation>
                        <div className="title">
                                <img src={cursoFigmatImg} alt="Codeboost" />
                                <h6>Curso de Figma Felipe Santana</h6>
                        </div>
                        <div className="info">
                            <p>Design de Interfaces, Prototipagem e Handoff</p>
                            <span>2022</span>
                        </div>
                        </CardFormation>  
                    </SwiperSlide>
                    <SwiperSlide>
                        <CardFormation>
                        <div className="title">
                                <img src={anhembiImg} alt="Codeboost" />
                                <h6>Anhembi Morumbi</h6>
                        </div>
                        <div className="info">
                            <p>Pós Graduação em Marketing e Comunição</p>
                            <span>2022</span>
                        </div>
                        </CardFormation>  
                    </SwiperSlide>
                    <SwiperSlide>
                        <CardFormation>
                        <div className="title">
                                <img src={adsGoogleImg} alt="Codeboost" />
                                <h6>Google Ads Completo Erick Scudero</h6>
                        </div>
                        <div className="info">
                            <p>Redes de Display, remarketing e Youtube ads.</p>
                            <span>2021</span>
                        </div>
                        </CardFormation> 
                    </SwiperSlide>
                    <SwiperSlide>
                        <CardFormation>
                        <div className="title">
                                <img src={unifevImg} alt="Codeboost" />
                                <h6>Unifev Votuporanga</h6>
                        </div>
                        <div className="info">
                            <p>Bacharelado em Arquitetura e Urbanismo.</p>
                            <span>2018</span>
                        </div>
                        </CardFormation>
                    </SwiperSlide>
                </Swiper>
            </div>
        </SectionFormation>

        <SectionSevices>
            <div className="content">
                <h2>Serviços</h2>
                <div className="services">
                    <div className="card-services">
                        <h5>Design de Interfaces e protótipos</h5>
                        <p>Criação de protótipos de interfaces web e mobile para validação e 
                            testes antes de colocar a ideia em execução.
                        </p>
                        <div className="icon">
                            <img src={interfacesImg} alt="" />
                        </div>
                    </div>
                    <div className="card-services purple">
                        <h5>Desenvolvimento de sites</h5>
                        <p>Desenvolvimento de sites e interfaces web, 
                            utilizando HTML, CSS e Javascript.</p>
                        <div className="icon">
                            <img src={devImg} alt="" />
                        </div>
                    </div>
                    <div className="card-services">
                        <h5>Desenvolvimento de aplicações web</h5>
                        <p>Desenvolvimento de aplicações web, como 
                            sistemas empresariais e sistema de 
                            gerenciamento com foco no usuário final.
                        </p>
                        <div className="icon">
                            <img src={aplicationImg} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </SectionSevices>

        <SectionTools>
            <div className="content">
                <h2>Ferramentas</h2>
                <div className="tools">
                    <CardTools>
                        <img src={vscodeImg} alt="Visual Studio Code" />
                        <span>Visual Studio Code</span>
                    </CardTools>
                    <CardTools>
                        <img src={githubImg} alt="Github" />
                        <span>Github</span>
                    </CardTools>
                    <CardTools>
                        <img src={figmaImg} alt="Figma" />
                        <span>Figma</span>
                    </CardTools>
                    <CardTools>
                        <img src={psImg} alt="Photoshop" />
                        <span>Photoshop</span>
                    </CardTools>
                    <CardTools>
                        <img src={ilustratorImg} alt="Illustrator" />
                        <span>Illustrator</span>
                    </CardTools>
                </div>
            </div>
        </SectionTools>

        <FollowMe>
            <div className="content">
                <span>&#123;Follow me&#125;</span>
                <div className="icon-logo">
                    <img src={logoJnPurple} alt="" />
                </div>
                <div className="social-media">
                    <div className="icon">
                        <a href="https://www.linkedin.com/in/jhoownogueira/" target="_blank">
                        <img src={linkedinPurple} alt="" />
                        </a>
                    </div>
                    <div className="icon">
                        <a href="https://www.facebook.com/jhonatanogueiraa/" target="_blank">
                        <img src={facebookPurple} alt="" />
                        </a>
                    </div>
                    <div className="icon">
                        <a href="https://www.instagram.com/jhonatanogueira_f/" target="_blank">
                        <img src={instagramPurple} alt="" />
                        </a>
                    </div>
                </div>
            </div>
        </FollowMe>
        </>
    );
}