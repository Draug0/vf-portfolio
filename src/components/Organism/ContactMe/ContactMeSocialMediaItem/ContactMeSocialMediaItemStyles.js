import styled from "styled-components";

export const ContactMeSocialMediaItemContainer = styled.section`
    display: grid;
    grid-template-rows: auto auto;
    grid-template-columns: 116.46px auto;
    grid-template-areas:    "image  ."
                            "image  social-media-data";
`;

export const ContactMeSocialMediaDataContainer = styled.div`
    grid-area: social-media-data;
    gap: 10px;
`;

export const ContactMeSocialMediaImage = styled.div`
    width: 100%;
    height: auto;
    grid-area: image;
`;

export const ContactMeSocialMediaTitle = styled.h4`
    font-family: 'Noto Serif Display';
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 24px;

    letter-spacing: 0.15px;

    color: #000000;
`;

export const ContactMeSocialMediaSubtitle = styled.p`
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 24px;

    letter-spacing: 0.15px;

    color: #000000;
`;