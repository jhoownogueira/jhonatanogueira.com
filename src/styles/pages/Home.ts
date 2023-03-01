import styled from "styled-components";

interface ImageBackgroundProps {
    backgroundImage: string;
}

export const HomeContainer = styled.div<ImageBackgroundProps>`
  width: 100%;
  height: calc(100vh - 80px - 80px);
  display: flex;
  align-items: start;
  justify-content: center;
  padding: 9rem 0 0;
  background-image: url(${(props) => props.backgroundImage});
  background-position: 30% 60%;
  background-size: 55%;
  background-repeat: no-repeat;
  
  
  .grid {
    width: 100%;
    max-width: 1220px;
    display: flex;
    flex-direction: column;
    
    .home {
      span, h1, p, button {
        color: ${props => props.theme.white};}
      span {
        font-weight: 300;
        font-size: 2rem;
        line-height: 37px;
      }
      h1 {
        font-weight: 400;
        font-size: 4rem;
        line-height: 74px;
        margin: 0.75rem 0;
      }
      p {
        font-weight: 300;
        font-size: 2rem;
        line-height: 37px;
      }

      button {
        width: 100%;
        max-width: 10.625rem;
        line-height: 2.5rem;
        border: 0;
        border-radius: 999px;
        background: ${props => props.theme['secondary-color-light']};
        margin-top: 3rem;
      }
    }
    
    }
  }
`
