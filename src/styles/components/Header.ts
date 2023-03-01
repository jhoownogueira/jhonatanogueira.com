import styled from "styled-components";

export const HeaderContainer = styled.header`
  width: 100%;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  
  nav {    
    ul {
      display: flex;
      align-items: center;
      gap: 3rem;
      li {
        a {
          font-size: 1rem;
          line-height: 112%;
          color: ${props => props.theme.white};}
        }
      }
    }
  }
`;