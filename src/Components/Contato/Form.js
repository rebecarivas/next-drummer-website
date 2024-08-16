import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import useForm from "../../../hooks/useForm.js";
import styled from "styled-components";
import Input from "./Input";
import { useTranslation } from "react-i18next";

function Form() {
  const [success, setSuccess] = useState(false);
  const [nonSuccess, setNonSuccess] = useState(false);

  const { t, i18n } = useTranslation();
  const form = useRef();

  const name = useForm("name");
  const email = useForm("email");

  const handleSubmit = async (e) => {
    const serviceID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;
    console.log(serviceID);
    console.log(templateID);
    console.log(publicKey);

    e.preventDefault();
    if (name.validate() && email.validate()) {
      emailjs.sendForm(serviceID, templateID, form.current, publicKey).then(
        (result) => {
          console.log(result.text);
          e.target.reset();
          name.setValue("");
          email.setValue("");
          setSuccess(true);
          setNonSuccess(false);
        },
        (error) => {
          console.log(error.text);
          e.target.reset();
          name.setValue("");
          email.setValue("");
          setNonSuccess(true);
          setSuccess(false);
        },
      );
    } else {
      console.log("nao enviar");
      setNonSuccess(true);
      setSuccess(false);
    }
  };

  return (
    <form ref={form} onSubmit={handleSubmit}>
      <FormContent>
        <Input
          type="text"
          id="name"
          autoFocus
          required
          name="name"
          label={t("Nome")}
          {...name}
        />
        <Input
          type="email"
          id="email"
          autoFocus
          required
          name="email"
          label="Email*:"
          {...email}
        />

        <label htmlFor="message">{t("Mensagem")}:</label>
        <textarea rows="5" id="message" autoFocus name="message" />
        <span>{t("campos")}</span>
        <button type="submit">{t("enviar")}</button>
        {success && <span>{t("mensafemsim")}</span>}
        {nonSuccess && <span>{t("mensagemnao")}</span>}
      </FormContent>
    </form>
  );
}

export default Form;

const FormContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 350px;
  @media (max-width: 992px) {
    width: 300px;
  }
  label {
    color: var(--gray);
    font-size: 1.2rem;
    margin-bottom: 5px;
  }
  input {
    margin-bottom: 10px;
  }
  span {
    color: var(--gray);
    font-size: 0.8rem !important;
    margin-bottom: 10px;
  }
  svg {
    width: 20px;
  }
  textarea {
    padding: 10px;
    color: var(--black);
    font-size: 1.2rem;
  }
  button {
    padding-top: 20px;
    padding-bottom: 20px;
    font-size: 1.2rem;
    font-weight: bold;
    background-color: var(--yellow);
    color: var(--black);
    transition: all 250ms linear 0s;

    &:hover {
      opacity: 0.8;
    }
  }
`;
