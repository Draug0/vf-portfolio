import { Paragraph, TitleSection } from "./../../../styled-component/styles";
import ContactMeForm from "./ContactMeForm/ContactMeForm";
import { ContactMeSocialMediaContainer } from "./ContactMeSocialMedia/ContactMeSocialMediaStyles";
import ContactMeSocialMedia from "./ContactMeSocialMedia/ContactMeSocialMedia";
import { ContactMeContainer } from "./ContactMeStyles";

const ContactMe = () => {
    return (
        <ContactMeContainer id="contactme" name="contactme">
            <article className="container">
                <TitleSection>CONTACTO</TitleSection>
                <ContactMeForm></ContactMeForm>
                <ContactMeSocialMedia/>
            </article>
        </ContactMeContainer>
    );
};  

export default ContactMe;