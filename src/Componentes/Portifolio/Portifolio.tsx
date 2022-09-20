
import { useEffect, useState } from 'react';
import { supabase } from '../../api/supabase';
import { CardPortifolio } from '../GlobalsComponents/CardPortifolio';
import { SectionProjects } from './styles';

interface Projetos {
 id: number;
 name: string;
 description: string;
 url: string;
}

export function Portifolio() {
    const [listaProjetos, setListaProjetos] = useState<Projetos[] | null>([]);

    useEffect(() => {
       supabase
       .from("portifolio")
       .select("*")
       .order("id")
       .then(({ data }) => {
        setListaProjetos(data)
       })  
    }, [])
 
    return (
        <SectionProjects>
            <div className="content">
                <div className="title">
                 <h2>Conheça alguns projetos meus</h2>
                 <p>Seja para trabalho, hobby ou por curiosidade. Gosto de criar algo novo.</p>
                </div>
                <div className="portifolio">
                 
                 {listaProjetos?.map(projetos => {
                  return (
                   <CardPortifolio 
                   key={projetos.id}
                   name={projetos.name}
                   description={projetos.description}
                   url={projetos.url}
                   />
                  )
                 })}
                 {/* <CardPortifolio 
                  name="Cinehome"
                  description="Criação de protótipos de interfaces web e mobile para validação e testes antes de colocar a ideia em execução."
                  url="https://jhoownogueira.github.io/Cinehome/"
                 />
                 <CardPortifolio 
                  name="Landing Page Itaú"
                  description="Criação de protótipos de interfaces web e mobile para validação e testes antes de colocar a ideia em execução."
                  url="https://jhoownogueira.github.io/landingpage-itau/"
                 />
                 <CardPortifolio 
                  name="Calculadora de Combustível"
                  description="Criação de protótipos de interfaces web e mobile para validação e testes antes de colocar a ideia em execução."
                  url="https://jhoownogueira.github.io/calculadora-de-combustivel/"
                 />
                 <CardPortifolio 
                  name="Landing Page Blizzard"
                  description="Criação de protótipos de interfaces web e mobile para validação e testes antes de colocar a ideia em execução."
                  url="https://jhoownogueira.github.io/Blizzard-estudo-gulp/"
                 />
                 <CardPortifolio 
                  name="Assine Flash"
                  description="Criação de protótipos de interfaces web e mobile para validação e testes antes de colocar a ideia em execução."
                  url="https://assine.flashnetbrasil.com.br/"
                 />
                 <CardPortifolio 
                  name="Pokedex - API"
                  description="Criação de protótipos de interfaces web e mobile para validação e testes antes de colocar a ideia em execução."
                  url="https://jhoownogueira.github.io/Projeto-Pokemon-API/"
                 /> */}

                </div>
            </div>
        </SectionProjects>
    )
}