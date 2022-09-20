import { BoldSpan } from "../../../../styled-component/styles";
import { ContactMeFormParagraph, ContactMeFormImage, ContactMeFormContainer, ContactMeTextFieldMail, ContactMeTextFieldName, ContactMeTextFieldSurname, ContactMeTextFieldMessage, ContactMeButton } from "./ContactMeFormStyles";
import ContactImage from "../../../../images/ContactImage.png";
import Image from "next/image";

const ContactMeForm = () => {
    return (
        <ContactMeFormContainer>
            <ContactMeFormParagraph>Si querés ponerte en contacto conmigo <BoldSpan>envía un mensaje</BoldSpan> dejando tu nombre, apellido y correo electrónico.</ContactMeFormParagraph>

            <ContactMeTextFieldName className="mt-4" id="name" label="Nombre" variant="filled"></ContactMeTextFieldName>
            <ContactMeTextFieldSurname className="mt-4" id="surname" label="Apellido" variant="filled"></ContactMeTextFieldSurname>
            <ContactMeTextFieldMail className="mt-4" id="email" label="Correo electrónico" variant="filled"></ContactMeTextFieldMail>
            <ContactMeTextFieldMessage
                className="mt-4"
                id="message"
                label="Mensaje"
                variant="filled"
                multiline
                rows={4}
            />
            <ContactMeButton className="mt-4">ENVIAR</ContactMeButton>
            <ContactMeFormImage className="ml-4">
                <Image 
                    src={ ContactImage } 
                    alt={ "Imagen alusiva al formulario" }
                />
            </ContactMeFormImage>
        </ContactMeFormContainer>
    );
};

export default ContactMeForm;