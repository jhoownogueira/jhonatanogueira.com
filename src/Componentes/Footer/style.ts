import styled from 'styled-components';

export const Container = styled.footer`
    position: relative;
    width: 100%;
    height: 106px;
    display: flex;
    justify-content: center;
    &::before {
        content: "";
        position: absolute;
        width: 100%;
        height: 13px;
        bottom: 0;
        background: linear-gradient(90deg, #A478E8 0%, #516CF7 100%);
    }

    .content {
        width: 100%;
        max-width: 1248px;
        height: 91px;
        padding: 32px 16px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        border-top: 2px solid var(--primary-color);

        small {
            font-weight: 400;
            font-size: 0.875rem;
            line-height: 150%;
            color: rgba(46, 46, 72, 0.8);
        }

        .logo {
            width: 100%;
            max-width: 173px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            
            span {
                font-weight: 400;
                font-size: 0.875rem;
                line-height: 150%;
                color: rgba(46, 46, 72, 0.8);
            }
            img {
                width: 48px;
            }
        }
    }

`