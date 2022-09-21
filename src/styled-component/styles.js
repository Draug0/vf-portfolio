import styled from "styled-components";

export const TitleSection = styled.h3`
    font-family: 'Arsenica Trial Bold';
    font-style: normal;
    font-weight: bolder;
    font-size: 1.5em;
    line-height: 1.6em;
    color: #2C3748;
    text-transform: uppercase;
`;

export const Paragraph = styled.p`
    font-family: 'Noto Serif Display';
    font-style: normal;
    font-weight: 300;
    font-size: 24px;
    line-height: 32px;
    letter-spacing: 0.15px;
    color: #000000;
`;

export const BoldSpan = styled.span`
    font-weight: bold;
`;

export const CustomButton = styled.button`
    transition: all 0.1s ease-out;
    background: #2C3748;
    border: 1px solid #2C3748;
    border-radius: 15px;

    font-family: 'Roboto';
    font-style: normal;
    font-weight: 500;
    font-size: 1.25rem;
    line-height: 1.2rem;
    letter-spacing: 0.03em;
    text-transform: uppercase;

    color: #F4E3E2;

    &:hover {
        color: #2C3748;
        background: #F4E3E2;
        border: 1px solid #F4E3E2;
    }
`;