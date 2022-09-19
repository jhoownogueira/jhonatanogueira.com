import styled from "styled-components";

export const SectionProjects = styled.section`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: flex-start;

    .content {
        width: 100%;
        max-width: 1248px;
        padding: 0 16px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        margin-top: 80px;
        margin-bottom: 80px;

        .title {
            margin-bottom: 120px;
            display: flex;
            flex-direction: column;
            align-items: center;

            h2 {
            width: fit-content;
            position: relative;

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
            
            p {
                font-weight: 400;
                font-size: 1.25rem;
                line-height: 120%;
                letter-spacing: -0.02em;
                margin-top: 12px;
            }

        }
        .portifolio {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 24px;
        }
    }

    @media(max-width: 900px) {
         .content {
            .portifolio {
                grid-template-columns: repeat(2, 1fr);
            }
         }   
    }
    @media(max-width: 635px) {
         .content {
            .title {
                h2 {
                    &::before {
                        right: unset;
                        left: 0;
                        bottom: -10px;
                    }
                }
            }
            .portifolio {
                grid-template-columns: repeat(1, 1fr);
            }
         }   
    }
`