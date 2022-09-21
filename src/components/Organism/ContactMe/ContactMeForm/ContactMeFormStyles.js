import styled from "styled-components";
import TextField from "@mui/material/TextField";
import { CustomButton, Paragraph } from "../../../../styled-component/styles";

export const CustomTextField = styled(TextField)`
  background: #ffffff;
  width: 100%;
`;

export const ContactMeFormParagraph = styled(Paragraph)`
  grid-area: paragraph;
`;

export const ContactMeFormContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-areas:
    "paragraph      paragraph   paragraph   image"
    "name           surname     email       image"
    "message        message     message     image"
    "submit         .           .           .";

  @media (max-width: 992px) {
    grid-template-areas:
      "paragraph"
      "name"
      "surname"
      "email"
      "message"
      "submit";
  }

  gap: 20px 10px;
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

export const ContactMeButton = styled(CustomButton)`
  background: #2c3748;
  border-radius: 15px;
  width: 100%;
  height: 48px;

  grid-area: submit;
`;

export const ContactMeFormImage = styled.div`
  height: 100%;
  width: auto;
  grid-area: image;
  padding-left: 1.5rem !important;

  @media (max-width: 992px) {
    display: none;
  }
`;
