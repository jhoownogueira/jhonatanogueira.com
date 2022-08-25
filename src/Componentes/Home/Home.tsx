import { SectionAboutMe, SectionFormation, SectionSevices } from "./style";
import { CardFormation } from "../../Styles/StylesComponents";
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
        </>
    );
}