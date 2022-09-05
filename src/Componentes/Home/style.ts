import styled from "styled-components";

export const SectionAboutMe = styled.section`
    width: 100%;
    height: 780px;
    display: flex;
    justify-content: center;
    align-items: flex-start;

    .content {
        width: 100%;
        max-width: 1248px;
        padding: 0 16px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-top: 80px;

        .left-container {
            span, p {
            line-height: 120%;
            letter-spacing: -0.02em;
            color: var(--purple-text);
            filter: opacity(0.8);
        }

        span {
            width: 100;
            max-width: 494px;
            display: inline-block;
            font-weight: 700;
            font-size: 2rem;
            margin-top: 12px;
            margin-bottom: 16px;
        }

        p {
            width: 100%;
            max-width: 652px;
            font-weight: 400;
            font-size: 1.25rem;
   
        }

        ul {
            list-style: none;
            width: 100%;
            max-width: 288px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin-top: 50px;

            li {
                .icon {
                    width: 48px;
                    height: 48px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    transition: all 0.5s ease-in-out;
                    &:hover {
                        transform: rotate3d(0, 1, 0, 45deg);
                        filter: brightness(0.9);
                    }
                }
            }
        }
        }

        .right-container {
            .image-box {
                width: 100%;
                max-width: 659px;
            }
        }
    }

    @media(max-width: 640px) {
        height: 1100px;
        .content {
            flex-direction: column;
            .left-container {
                margin-bottom: 80px;
            }
        }
    }
    @media(max-width: 540px) {
        height: 1000px;
    }

`

export const SectionFormation = styled.section`
    width: 100%;
    height: 500px;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    .content {
        width: 100%;
        max-width: 1248px;
        padding: 0 16px;
        display: flex;
        flex-direction: column;
        align-items: space-between;
        justify-content: center;
        
        h2 {
            width: fit-content;
            position: relative;
            margin-bottom: 70px;

            &::before {
                content: "";
                position: absolute;
                right: 0;
                bottom: 0;
                width: 68px;
                height: 6px;
                background: linear-gradient(90deg, #A478E8 0%, #516CF7 100%);
                opacity: 0.5;
                border-radius: 0px 8px;
            }
        }

        .swiper {
            width: 100%;
            height: 220px;
        }

        .swiper-pagination {
                bottom: -5px;
            .swiper-pagination-bullet {
                width: 8px;
                height: 8px;
                background: linear-gradient(90deg, #A478E8 0%, #516CF7 100%);
                opacity: 0.5;
                border-radius: 12px;
                transition: all 0.3s; 

                &-active {
                    width: 20px;
                }
            }
        }
    }

    @media(max-width: 657px) {
        .content {
            h2 {
                &::before {
                    right: unset;
                }
            }
        }
    }

`

export const SectionSevices = styled.section`
    width: 100%;
    height: 600px;
    display: flex;
    justify-content: center;
    align-items: flex-start; 
    .content {
        width: 100%;
        max-width: 1248px;
        padding: 0 16px;
        display: flex;
        flex-direction: column;
        align-items: space-between;
        justify-content: center;

        h2 {
            position: relative;
            width: fit-content;
            margin-bottom: 65px;

            &::before {
                content: "";
                position: absolute;
                right: 0;
                bottom: 0;
                width: 51px;
                height: 6px;
                background: linear-gradient(90deg, #A478E8 0%, #516CF7 100%);
                opacity: 0.5;
                border-radius: 0px 8px;
            }
        }
        .services {
            width: 100%;
            display: flex;
            justify-content: space-between;

            .card-services {
            position: relative;
            width: 100%;
            max-width: 374.23px;
            height: 381px;
            background: #E1E7FE;
            border-radius: 24px;
            padding: 45px 60px;
            transition: all 0.5s ease-in-out;
            
            &:hover {
                filter: brightness(0.95);
                transform: scale(1.05);
            }

            p {
                font-weight: 500;
                font-size: 0.875rem;
                line-height: 120%;
                color: var(--purple-text);
                margin-top: 50px;
            }
            .icon {
                position: absolute;
                bottom: 45px;
                right: 60px;
                height: 48px;
                width: 70px;
                display: flex;
                align-items: center;
                justify-content: flex-end;
            }

            &.purple {
                background: linear-gradient(90deg, #A478E8 0%, #516CF7 100%);

                h5, p {
                    color: var(--white);
                }
            }
        }
        }

    }

    @media(max-width: 1200px) {
        height: 1500px;
        .content {
            h2 {
                &::before {
                    right: -5px;
                }
            }
            .services {
                flex-direction: column;
                align-items: center;
                gap: 24px;
            }
        }
    }
`

export const SectionTools = styled.section`
    width: 100%;
    height: 350px;
    display: flex;
    justify-content: center;
    align-items: flex-start; 
    .content {
        width: 100%;
        max-width: 1248px;
        padding: 0 16px;
        display: flex;
        flex-direction: column;
        align-items: space-between;
        justify-content: center;

        h2 {
            width: fit-content;
            position: relative;
            margin-bottom: 50px;

            &::before {
                content: "";
                position: absolute;
                width: 70px;
                height: 6px;
                right: 0;
                bottom: 0;
                background: linear-gradient(90deg, #A478E8 0%, #516CF7 100%);
                opacity: 0.5;
                border-radius: 0px 8px;
            }
        }
        .tools {
            display: flex;
            align-items: center;
            justify-content: space-between;
            span {
                text-align: center;
            }
        }
    }

    @media(max-width:480px) {
        height: 1200px;
        .content {
            .tools {
                flex-direction: column;
                gap: 24px;
            }
        }
    }

`

export const FollowMe = styled.section`
    width: 100%;
    height: 500px;
    display: flex;
    justify-content: center;
    align-items: center;

    .content {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        span {
            font-weight: 700;
            font-size: 0.875rem;
            line-height: 120%;
            letter-spacing: -0.02em;
            background: linear-gradient(90deg, #A478E8 0%, #516CF7 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
        }
        .icon-logo {
                width: 176px;
                height: 176px;
                display: flex;
                justify-content: center;
                align-items: center;
                background: #FFFFFF;
                box-shadow: 0px 0px 37px rgba(0, 0, 0, 0.15);
                border-radius: 42.3077px;
                margin-top: 16px;
                margin-bottom: 24px;
                transition: all 1s ease-in-out;

                &:hover {
                    transform: rotate3d(1, 1, 0.1, 360deg);
                    filter: brightness(0.90);
                }
            }

        .social-media {
            width: 120px;
            display: flex;
            justify-content: space-between;
            align-items: center;

            .icon {
                width: 32px;
                height: 32px;
                display: flex;
                justify-content: center;
                align-items: center;
                transition: all 0.3s ease-in-out;
                
                &:hover {
                    filter: brightness(0.5);
                }
            }
        }
    }
`