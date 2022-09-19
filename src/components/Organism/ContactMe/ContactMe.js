import { Paragraph, TitleSection } from "./../../../styled-component/styles";
import ContactMeForm from "./ContactMeForm/ContactMeForm";
import { ContactMeSocialMediaContainer } from "./ContactMeSocialMedia/ContactMeSocialMediaStyles";
import ContactMeSocialMedia from "./ContactMeSocialMedia/ContactMeSocialMedia";
import { ContactMeContainer } from "./ContactMeStyles";

const ContactMe = () => {
    return (
        <ContactMeContainer id="contactme">
            <TitleSection>Contacto</TitleSection>
            <ContactMeForm></ContactMeForm>
            <ContactMeSocialMedia/>
        </ContactMeContainer>
    );
};  

export default ContactMe;