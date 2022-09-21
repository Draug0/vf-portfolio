import { useState } from "react";
import { BoldSpan } from "../../../../styled-component/styles";
import {
  ContactMeFormParagraph,
  ContactMeFormImage,
  ContactMeFormContainer,
  ContactMeTextFieldMail,
  ContactMeTextFieldName,
  ContactMeTextFieldSurname,
  ContactMeTextFieldMessage,
  ContactMeButton,
} from "./ContactMeFormStyles";

import ContactImage from "./../../../../images/ContactImage.png";
import Image from "next/image";

const ContactMeForm = () => {
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);
  const [values, setValues] = useState({
    name: "",
    surname: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  const handleValidate = (name, surname, email, message) => {
    return (
      name.length > 0 &&
      surname.length > 0 &&
      email.length > 0 &&
      message.length > 0
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const valid = handleValidate(
      e.target[0].value,
      e.target[1].value,
      e.target[2].value,
      e.target[3].value
    );

    if (valid) {
      setLoading(true);
      fetch(`https://formsubmit.co/ajax/${process.env.NEXT_PUBLIC_EMAIL}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          Nombre: e.target[0].value,
          Apellido: e.target[1].value,
          Email: e.target[2].value,
          Mensaje: e.target[3].value,
          _honey: "",
        }),
      })
        .then((response) => response.json())
        .then((data) => {
          setSent(data.success);
          setValues({
            name: "",
            surname: "",
            email: "",
            message: "",
          });

          setTimeout(() => {
            setSent(false);
          }, 2000);

          setLoading(false);
        })
        .catch((error) => {
          console.log(error);
          setLoading(false);
        });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <ContactMeFormContainer>
        <ContactMeFormParagraph>
          Si querés ponerte en contacto conmigo{" "}
          <BoldSpan>envía un mensaje</BoldSpan> dejando tu nombre, apellido y
          correo electrónico.
        </ContactMeFormParagraph>

        <ContactMeTextFieldName
          className="mt-4"
          id="name"
          name="name"
          label="Nombre"
          type="text"
          variant="filled"
          onChange={handleChange}
          value={values.name}
          required
        ></ContactMeTextFieldName>
        <ContactMeTextFieldSurname
          className="mt-4"
          id="surname"
          name="surname"
          label="Apellido"
          type="text"
          variant="filled"
          onChange={handleChange}
          value={values.surname}
          required
        ></ContactMeTextFieldSurname>
        <ContactMeTextFieldMail
          className="mt-4"
          id="email"
          name="email"
          label="Correo electrónico"
          type="email"
          variant="filled"
          onChange={handleChange}
          value={values.email}
          required
        ></ContactMeTextFieldMail>
        <ContactMeTextFieldMessage
          className="mt-4"
          id="message"
          name="message"
          label="Mensaje"
          variant="filled"
          multiline
          rows={4}
          onChange={handleChange}
          value={values.message}
          required
        />
        <ContactMeButton className="mt4" type={loading ? "button" : "submit"}>
          {loading ? (
            <div className="spinner-border" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          ) : (
            "ENVIAR"
          )}
        </ContactMeButton>
        <ContactMeFormImage>
          <Image src={ContactImage} alt={"Imagen alusiva al formulario"} />
        </ContactMeFormImage>
      </ContactMeFormContainer>
      <div className="toast-container position-fixed top-50 start-50 translate-middle p-3">
        <div
          id="liveToast"
          className={`toast ${sent ? "show" : ""}`}
          role="alert"
          aria-live="assertive"
          aria-atomic="true"
        >
          <div className="toast-body">Mensaje enviado</div>
        </div>
      </div>
    </form>
  );
};

export default ContactMeForm;
