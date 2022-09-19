import styled from 'styled-components';

export const Container = styled.header`
    width: 100%;
    height: 88px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: var(--white);

    .content {
        width: 100%;
        max-width: 1248px;
        padding: 0 16px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        
    }

    .right-container {
        width: 100%;
        max-width: 486px;
        display: flex;
        justify-content: space-between;
        align-items: center;

        ul {
            width: 100%;
            max-width: 295px;
            display: flex;
            justify-content: space-between;
            list-style: none;
            li {
                &:not(:last-child) {
                margin-right: 12px;
            }
            a {
                color: var(--purple-text);
                text-decoration: none;
                font-size: 1rem;
                font-weight: 400;
                letter-spacing: -1px;
                transition: all 0.3s;
                &:hover {
                    color: var(--primary-color);
                    font-weight: 700;
                }
                &.active {
                    color: var(--primary-color);
                    font-weight: 500;
                    border-bottom: 1px solid var(--primary-color);
                }
            }
            }
        }

    }

    .mobile-menu {
        position: fixed;
        top: 88px;
        right: 0;
        width: 55%;
        height: 100vh;
        z-index: 99;

        background: var(--white);

        display: flex;
        flex-direction: column;
        padding: 50px;
        transform: translateX(100%);
        opacity: 0;
        transition: all 0.4s ease-in-out;

        ul {
            li {
                list-style: none;
                &:not(:last-child) {
                    margin-bottom: 16px;
                }
                a {
                color: var(--purple-text);
                text-decoration: none;
                font-size: 1.5rem;
                font-weight: 400;
                letter-spacing: -1px;
                transition: all 0.3s;
                &:hover {
                    color: var(--primary-color);
                    font-weight: 700;
                }
                &:active {
                    color: var(--primary-color);
                    font-weight: 500;
                    border-bottom: 1px solid var(--primary-color);
                }
            }
            }
        }

        &.open {
            transform: translateX(0);
            opacity: 1;
        }
    }

    @media(max-width:700px) {
        .right-container {
            display: none;
        }
    }

`