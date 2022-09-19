import { StyleCardFormation } from "../../StylesGlobals/StylesComponents";

interface CardFormationProps {
 img: string;
 name: String;
 description: String;
 conclusion: String;
}

export function CardFormation(props: CardFormationProps) {
 return (
  <StyleCardFormation>
   <div className="title">
    <img src={props.img} alt="Codeboost" />
    <h6>{props.name}</h6>
   </div>
   <div className="info">
    <p>{props.description}</p>
    <span>{props.conclusion}</span>
   </div>
  </StyleCardFormation>
 )
}