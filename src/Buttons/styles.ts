import styled from 'styled-components';

export const PrimaryButtonStyle = styled.button`
    width: 100%;
    max-width: 130px;
    background: var(--purple-linear);
    border: transparent;
    border-radius: 8px;
    transition: filter 0.3s;

    &:hover {
        filter: brightness(1.2);
    }

    span {
        font-family: 'DM Sans', sans-serif;
        font-size: 1rem;
        font-weight: 700;
        line-height: 48px;
        letter-spacing: -0.5px;
        color: #fff;
    }
`