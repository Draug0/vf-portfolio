import styled from "styled-components";

export const ContactMeSocialMediaItemContainer = styled.section`
    display: grid;
    grid-template-rows: auto auto;
    grid-template-columns: 1fr 3fr;
    grid-template-areas:    "image  ."
                            "image  social-media-data";

    @media (max-width: 769px) {
        grid-template-columns: auto auto;
    }
`;

export const ContactMeSocialMediaDataContainer = styled.div`
    grid-area: social-media-data;
    margin-left: 0.75rem !important;
    margin-right: 0.75rem !important;

    &:hover {
        background: #F4E3E2;
        border-radius: 1rem;
        box-shadow: 2px 2px 4px 2px rgba(0, 0, 0, 0.05), inset 4px 4px 4px rgba(255, 255, 255, 0.25);
    }
`;

export const ContactMeSocialMediaImage = styled.div`
    width: 100%;
    height: auto;
    grid-area: image;
`;

export const ContactMeSocialMediaTitle = styled.h4`
    font-family: 'Noto Serif Display';
    font-style: normal;
    font-weight: bolder;
    font-size: 1.25rem;
    line-height: 1.5rem;

    letter-spacing: 0.1rem;

    color: #000000;

    @media (max-width: 769px) {
        font-size: 1.1rem;
    }
`;

export const ContactMeSocialMediaSubtitle = styled.p`
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 500;
    font-size: 1.25rem;
    line-height: 1.5rem;

    letter-spacing: 0.1rem;

    color: #000000;

    @media (max-width: 769px) {
        font-size: 1.1rem;
    }
`;