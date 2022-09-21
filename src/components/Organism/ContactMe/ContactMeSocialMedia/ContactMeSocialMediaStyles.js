import styled from "styled-components";

export const ContactMeSocialMediaContainer = styled.div`
    /*display: flex;
    flex-direction: row;

    @media (max-width: 992px) {
        flex-direction: column;
    }*/

    display: grid;
    grid-template-columns: 1fr;
    gap: 10px;
    grid-template-areas: "text" "social-1" "social-2";

    @media (min-width: 769px) {
        grid-template-columns: 1fr 1fr; 
        grid-template-areas: "text       text"
                            "social-1    social-2";
    }

    @media (min-width: 1200px) {
        grid-template-columns: 1fr 1fr 1fr;
        grid-template-areas: "text
                            social-1    
                            social-2";
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