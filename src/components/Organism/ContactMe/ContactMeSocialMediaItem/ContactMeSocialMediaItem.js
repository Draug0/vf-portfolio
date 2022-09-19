import { ContactMeSocialMediaItemContainer, ContactMeSocialMediaTitle, ContactMeSocialMediaSubtitle, ContactMeSocialMediaImage, ContactMeSocialMediaDataContainer } from "./ContactMeSocialMediaItemStyles";

const ContactMeSocialMediaItem = ({ title, contact }) => {
    return (
        <ContactMeSocialMediaItemContainer>
            <ContactMeSocialMediaImage></ContactMeSocialMediaImage>
            <ContactMeSocialMediaDataContainer className="ml-2">
                <ContactMeSocialMediaTitle>{ title }: </ContactMeSocialMediaTitle>
                <ContactMeSocialMediaSubtitle>{ contact }</ContactMeSocialMediaSubtitle>
            </ContactMeSocialMediaDataContainer>
        </ContactMeSocialMediaItemContainer>
    );
};

export default ContactMeSocialMediaItem;

/* <ContactMeSocialMediaItemContainer className="row mt-4">
            <div className="col-auto">
                <ContactMeSocialMediaImage></ContactMeSocialMediaImage>
            </div>
            <div className="col d-flex flex-column flex-wrap">
                <div style={{ flexGrow: 1 }}></div>
                <div>
                    <ContactMeSocialMediaTitle>{ title }: </ContactMeSocialMediaTitle>
                    <ContactMeSocialMediaSubtitle>{ contact }</ContactMeSocialMediaSubtitle>
                </div>
            </div>
        </ContactMeSocialMediaItemContainer> */