
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
                </div>
            </div>
        </SectionProjects>
    )
}