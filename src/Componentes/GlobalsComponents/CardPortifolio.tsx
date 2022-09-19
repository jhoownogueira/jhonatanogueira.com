 import { StyleCardPortifolio } from '../../StylesGlobals/StylesComponents'

 interface CardPortifolioProps {
  name: String;
  description: String;
  url: string;
 }

export function CardPortifolio(props: CardPortifolioProps) {
 return (
  <StyleCardPortifolio>
   <h5>{props.name}</h5>
   <span>{props.description}</span>
   <a href={props.url} target="_blank" rel="noreferrer">Go!</a>
  </StyleCardPortifolio>
 )
}