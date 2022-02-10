import styled from "styled-components";

export const Conteiner = styled.div`
    width: 100%
    height: 400px;
    overflow: hidden;
    position: relative;
`;


export const ImgSlider = styled.img`
    width: 100%;
    height: 100%;
`;


export const Text1 = styled.h1`
    font-size: 2.6rem;
    position:absolute;
    top: 30%;
    left: center;
    margin-left: 80px;

    @media screen and(max-width:400px) {
        font-size: 1rem;
    }
    @media screen and(max-width:300px) {
        font-size: 0.5rem;
    }
    
`

export const Text2 = styled.h2`
    font-size: 2rem;
    position:absolute;
    top: 60%;
    left: center;
    margin-left: 80px;
    
    @media screen and(max-width:400px) {
        font-size: 1rem;
    }
    @media screen and(max-width:300px) {
        font-size: 0.5rem;
    }
`
