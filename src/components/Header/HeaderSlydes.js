import styled from "styled-components";

export const Conteiner = styled.div`
    position: relative;
    display: inline-block;
    text-align: center;
    overflow: hidden;

`;

export const ImgSlider = styled.img`
    width: 100%;
    height: 100%;
`;

export const Textos = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-family: ${props => props.theme.fonts};
    color: ${props => props.theme.pallet.third};

    h1{
       font-size: 2em;
    }
    h2{
        text-transform: uppercase;
        font-size: 4em;
    }

    @media screen and (max-width: 300px){
        h1{
       font-size: .8em;
    }
        h2{
            font-size: 1.1em; 
        }
    }

    @media screen and (max-width: 600px){
        h1{
       font-size: .8em;
    }
        h2{
            font-size: 1.1em; 
        }
    }

`
