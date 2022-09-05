import styled from 'styled-components';

export const PrimaryButton = styled.button`
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

export const CardFormation = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    max-width: 300px;
    height: 180px;
    background: #F7F9FC;
    border-radius: 6px;
    padding: 40px 20px 40px 20px;
    transition: all 0.5s ease-in-out;

    &:hover {
        transform: rotate3d(0, 1, 0, 20deg);
        filter: brightness(0.90);
    }

    .title {
        width: 100%;
        max-width: 239.17px;
        display: flex;
        align-items: center;
        justify-content: flex-start;

        img {
            margin-right: 14px;
        }
    }

    .info {
        width: 100%;
        max-width: 239.17px;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
        margin-top: 7px;

        p {
            font-weight: 500;
            font-size: 0.8rem;
            line-height: 16px;
            color: var(--purple-text);
        }

        span {
            display: inline-block;
            font-weight: 500;
            font-size: 0.8rem;
            line-height: 16px;
            letter-spacing: 0.01em;
            background: linear-gradient(90deg, #A478E8 0%, #516CF7 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            margin-top: 2px;
        }
    }
`

export const CardTools = styled.div`
    width: 201.87px;
    height: 207px;
    background: #F7F9FC;
    border-radius: 24px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    transition: all 0.5s ease-in-out;

    &:hover {
        transform: scale(1.05);
        filter: brightness(0.9);
    }

    img {
        width: 53px;
        margin-bottom: 21px;
    }

    span {
        font-weight: 700;
        font-size: 1rem;
        line-height: 120%;
    }

`

interface AnimationButton {
    isActive: boolean,
}

export const MobileButton = styled.button<AnimationButton>`

    ${(props) => props.isActive ? 
    `
    background: transparent;
    border: 0;
    width: 48px;
    height: 48px;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 0;
    display: none;

    div {
        width: 35px;
        height: 3px;
        background: linear-gradient(90deg, #A478E8 0%, #516CF7 100%);
        border-radius: 8px;
        transition: all 0.3s;
        .mid-bullet {
            opacity:1
        }
    }
    .top-bullet {
        transform: rotate(45deg) translateY(2px);
       }
    .mid-bullet {
        opacity:0;
        display: none;
    }
    .bottom-bullet {
        transform: rotate(-45deg) translateY(-2px);
    }

    @media(max-width:700px) {
        display: flex;
    }

    `

    : 

    `
        background: transparent;
        border: 0;
        width: 48px;
        height: 48px;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 8px;
        display: none;
        transition: all 0.3s;
       
    div {
        width: 35px;
        height: 3px;
        background: linear-gradient(90deg, #A478E8 0%, #516CF7 100%);
        border-radius: 8px;
        transition: all 0.3s;
    }
    .top-bullet {
        transform: rotate(0deg);
       }
       .mid-bullet {
           opacity: 1;
       }
       .bottom-bullet {
           transform: rotate(0deg);
       }

       @media(max-width:700px) {
        display: flex;
    }

    `
    };

`