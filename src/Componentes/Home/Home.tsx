import 
 { 
  FollowMe,
  SectionAboutMe, 
  SectionFormation, 
  SectionSevices, 
  SectionTools 
 } 
from "./style";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper";
import { CardFormation } from "../GlobalsComponents/CardFormation";
import { CardTools } from "../GlobalsComponents/CardTools";

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
                slidesPerView={1.2}
                breakpoints={{
                    640: {
                        slidesPerView: 2.2
                    },
                    840: {
                        slidesPerView: 2.8
                    },
                    1050: {
                        slidesPerView: 3.5
                    }
                }}
                >
                    <SwiperSlide>
                        <CardFormation 
                         img={codeBoostImg}
                         name="Codeboost William Moreira"
                         description="Front-end. HTML, CSS, SASS, JS, GULP e React"
                         conclusion="2022"
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <CardFormation 
                         img={frontStartImg}
                         name="Frontstart Isadora Stangarlin"
                         description="Front-end. HTML, CSS, LESS, JS e VUE"
                         conclusion="2022"
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <CardFormation 
                         img={cursoFigmatImg}
                         name="Curso de Figma Felipe Santana"
                         description="Design de Interfaces, Prototipagem e Handoff"
                         conclusion="2022"
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <CardFormation 
                         img={anhembiImg}
                         name="Anhembi Morumbi"
                         description="Pós Graduação em Marketing e Comunição"
                         conclusion="2022"
                        /> 
                    </SwiperSlide>
                    <SwiperSlide>
                        <CardFormation 
                         img={adsGoogleImg}
                         name="Google Ads Completo Erick Scudero"
                         description="Redes de Display, remarketing e Youtube ads."
                         conclusion="2021"
                        /> 
                    </SwiperSlide>
                    <SwiperSlide>
                        <CardFormation 
                         img={unifevImg}
                         name="Unifev Votuporanga"
                         description="Bacharelado em Arquitetura e Urbanismo"
                         conclusion="2018"
                        /> 
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
                 <CardTools 
                  img={vscodeImg}
                  name="Visual Studio Code"
                 />
                 <CardTools 
                  img={githubImg}
                  name="Github"
                 /> 
                 <CardTools 
                  img={figmaImg}
                  name="Figma"
                 /> 
                 <CardTools 
                  img={psImg}
                  name="Photoshop"
                 /> 
                 <CardTools 
                  img={ilustratorImg}
                  name="Illustrator"
                 />  
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
                        <a href="https://www.linkedin.com/in/jhoownogueira/" target="_blank" rel="noreferrer">
                        <img src={linkedinPurple} alt="" />
                        </a>
                    </div>
                    <div className="icon">
                        <a href="https://www.facebook.com/jhonatanogueiraa/" target="_blank" rel="noreferrer">
                        <img src={facebookPurple} alt="" />
                        </a>
                    </div>
                    <div className="icon">
                        <a href="https://www.instagram.com/jhonatanogueira_f/" target="_blank" rel="noreferrer">
                        <img src={instagramPurple} alt="" />
                        </a>
                    </div>
                </div>
            </div>
        </FollowMe>
        </>
    );
}