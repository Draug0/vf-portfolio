import styled from "styled-components";

export const HeroContainer = styled.div`
    height: 928px;
    width: auto;
`;

export const HeroTitle = styled.div`     
    font-family: 'Noto Serif Display';
    font-style: normal;
    font-weight: 500;
    font-size: 2.5em;
    line-height: 54px;
    text-align: center;
    letter-spacing: 0.7em;

    color: #000000;

    @media (max-width: 769px) {
        font-size: 2em;
    }
`;

export const HeroSubTitle = styled.div`
    font-family: 'Arsenica Trial';
    font-style: normal;
    font-weight: 500;
    font-size: 2.5em;
    line-height: 48px;

    color: #000000;

    @media (max-width: 769px) {
        font-size: 1.5em;
    }
`;