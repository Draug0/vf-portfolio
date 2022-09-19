import styled from "styled-components";
import TextField from '@mui/material/TextField';
import { Paragraph } from "../../../../styled-component/styles";

export const CustomTextField = styled(TextField)`
    background: #FFFFFF;
    width: 100%;
`;

export const ContactMeFormParagraph = styled(Paragraph)`
    grid-area: paragraph;
`;

export const ContactMeFormContainer = styled.div`
    display: grid;
    grid-template-areas:    "paragraph      paragraph   paragraph   image"
                            "name           surname     email       image"
                            "message        message     message     image"
                            "submit         submit      submit      .";

    @media (max-width: 992px) {
        grid-template-areas:    "paragraph"
                                "name"
                                "surname"           
                                "email"
                                "message"
                                "submit";
    }
`;

export const ContactMeTextFieldName = styled(CustomTextField)`
    grid-area: name;
    width: auto;
`;

export const ContactMeTextFieldSurname = styled(CustomTextField)`
    grid-area: surname;
    width: auto;
    margin-left: 1rem;
    margin-right: 1rem;

    @media (max-width: 992px) {
        margin-left: 0;
        margin-right: 0;
    }
`;

export const ContactMeTextFieldMail = styled(CustomTextField)`
    grid-area: email;
    width: auto;
`;

export const ContactMeTextFieldMessage = styled(CustomTextField)`
    grid-area: message;
`;

export const ContactMeButton = styled.button`
    background: #2C3748;
    border-radius: 15px;
    width: 100%;
    height: 48px;

    font-family: 'Roboto';
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 23px;
    letter-spacing: 0.03em;
    text-transform: uppercase;

    color: #F4E3E2;

    grid-area: submit;
`;

export const ContactMeFormImage = styled.div`
    width: 384px;
    height: auto;
    background-color: #2C3748;

    grid-area: image;

    @media (max-width: 992px) {
        display: none;
    }
`;