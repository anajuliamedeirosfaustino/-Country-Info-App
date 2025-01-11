import styled from "styled-components";

export const Header = styled.header<{theme: string}>`
    height: 90px;
    background-color: ${props => props.theme === 'light' ? '' : 'rgb(43, 55, 67)'};
    color: ${props => props.theme === 'light' ? '' : '#FFF'};
    transition: all ease 0.2s;
    box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
    transition: all ease 0.2s;
    
    .container {
        display: flex;
        width: 1024px;
        margin: auto;
        justify-content: space-between;
        align-items: center;

        p {
            cursor: pointer
        }
    }

    @media(max-width: 1024px) {
        &{
            padding: 0px 20px;

            .container {
                width: auto
            }
        }
    }

    @media(max-width: 767px) {
        
        .container {
            height: 100%;
            h1 {
                font-size: 17px;
            }
            p {
                font-size: 14px
            }
        }
    }
`