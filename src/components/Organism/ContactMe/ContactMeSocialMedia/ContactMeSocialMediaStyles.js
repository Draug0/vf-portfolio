import styled from "styled-components";

export const ContactMeSocialMediaContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: justify-content-between;

    @media (max-width: 992px) {
        flex-direction: column;
    }
`;

export const ContactMeImage = styled.div`
    width: auto;
    height: auto;
    background-color: #2C3748;

    grid-area: image;

    @media (max-width: 769px) {
        display: none;
    }
`;