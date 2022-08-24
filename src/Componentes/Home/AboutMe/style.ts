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

`