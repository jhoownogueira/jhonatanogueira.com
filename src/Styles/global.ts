import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root {
        --purple-linear: linear-gradient(90deg, #A478E8 0%, #516CF7 100%);
        
        --primary-color: #5531A7;
        --secondary-color: #A478E8;
        --terciary-color: #516CF7;

        --soft-primary: #EFE2F9;
        --soft-secondary: #E1E7FE;
        --soft-terciary: #E2E6EE;

        --purple-text: #2E2E48;

        --white: #F2F2F2;
        --black: #0D0D0D;

    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    // font-size: 16px (Desktop)
    html {
        font-family: 'DM Sans', sans-serif;

        @media (max-width: 1080px) {
            font-size: 93.75%; // 15px
        }

        @media (max-width: 720px) {
            font-size: 87.50%; // 14px
        }
    }

    body {
        -webkit-font-smoothing: antialiased;
    }

    button {
        cursor: pointer;
    }

    img {
        display: block;
        max-width: 100%;
    }

    h1, h2, h5 {
        font-weight: 700;
        letter-spacing: -0.02em;
        color: var(--purple-text);
    }
    h1 {
        font-size: 4rem;
    }

    h2 {
        font-size: 3rem;
    }

    h5 {
        font-size: 1.5rem;
    }

    h6 {
        font-weight: 500;
        font-size: 0.875rem;
        line-height: 14px;
        color: var(--purple-text);
    }

    [disable] {
        opacity: 0.6;
        cursor: not-allowed;
    }

`