import { AppContainer } from "@/shared/AppContainer/AppContainer";
import s from "./Contacts.module.scss";
import { AppButton } from "@/shared/AppButton/AppButton";
import { AppTitle } from "@/shared/AppTitle/AppTitle";
import { AppInput } from "@/shared/AppInput/AppInput";
import { useState } from "react";
import { AppTextarea } from "@/shared/AppTextarea/AppTextarea";
export function Contacts() {
  const [name, setName] = useState<string>("");
  const [nameError, setNameError] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [emailError, setEmailError] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [messageError, setMessageError] = useState<string>("");
  return (
    <section id="contacts">
      <AppContainer className={s.container}>
        <AppTitle sectionTitle>Контакты</AppTitle>
        <form
          action="#"
          className={s.form}
          onSubmit={(e) => {
            e.preventDefault();
            setName("");
            setEmail("");
            setMessage("");
          }}
        >
          <AppTitle TagName="h4">Связаться с нами</AppTitle>
          <AppInput
            value={name}
            error={nameError}
            placeholder="Имя"
            changeInput={(value: string) => setName(value)}
            required
          />
          <AppInput
            value={email}
            error={emailError}
            placeholder="Почта(email)"
            changeInput={(value: string) => setEmail(value)}
            // pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
            required
          />
          <AppTextarea
            value={message}
            error={messageError}
            placeholder="Сообщение(не обязательно)"
            changeInput={(value: string) => setMessage(value)}
            // required
          />
          {/* <input
              type="tel"
              id="phone"
              placeholder="+7 (900) 123-45-67"
              pattern="\+7\s?[\(]{0,1}9[0-9]{2}[\)]{0,1}\s?\d{3}[-]{0,1}\d{2}[-]{0,1}\d{2}"
              className="form__input"
            /> */}
          <AppButton
            decorator="filled"
            colorType="inverted"
            className={s.button}
          >
            Отправить
          </AppButton>
        </form>
      </AppContainer>
    </section>
  );
}
