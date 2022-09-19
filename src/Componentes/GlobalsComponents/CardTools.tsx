import { StyleCardTools } from "../../StylesGlobals/StylesComponents";

interface CardToolsProps {
 img: string;
 name: String;
}

export function CardTools(props: CardToolsProps) {
 return (
  <StyleCardTools>
   <img src={props.img} alt="Visual Studio Code" />
   <span>{props.name}</span>
  </StyleCardTools>
 )
}