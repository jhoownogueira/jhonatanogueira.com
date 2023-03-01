import styled from "styled-components";

export const FooterContainer = styled.footer`
  width: 100%;
  height: 80px;
  display: flex;
  border-bottom: 3px solid ${props => props.theme["primary-color-light"]};
  
  nav {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    ul {
      display: flex;
      align-items: center;
      gap: 1rem;
    }
  }
`
