import { BoldSpan, Paragraph } from "../../../../styled-component/styles";
import ContactMeSocialMediaItem from "../ContactMeSocialMediaItem/ContactMeSocialMediaItem";
import { ContactMeSocialMediaContainer } from "./ContactMeSocialMediaStyles";

import Instagram from "../../../../images/Instagram.png";
import Mail from "../../../../images/Correo.png";

const ContactMeSocialMedia = () => {
  return (
    <ContactMeSocialMediaContainer className="mt-4">
      <Paragraph
        style={{ gridArea: "text" }}
        className="d-flex align-items-center"
      >
        <span>
          <span>O si no contactame a través de mis </span>
          <BoldSpan>redes sociales</BoldSpan>
        </span>
      </Paragraph>
      <ContactMeSocialMediaItem
        style={{ gridArea: "social-1" }}
        image={Mail}
        title={"Correo electrónico"}
        contact={"estudiovfuy@gmail.com"}
        url="mailto:estudiovfuy@gmail.com"
      ></ContactMeSocialMediaItem>
      <ContactMeSocialMediaItem
        style={{ gridArea: "social-2" }}
        image={Instagram}
        title={"Instagram"}
        contact={"@communitymanager_vf"}
        url="https://www.instagram.com/communitymanager_vf/"
      ></ContactMeSocialMediaItem>
    </ContactMeSocialMediaContainer>
  );
};

export default ContactMeSocialMedia;
