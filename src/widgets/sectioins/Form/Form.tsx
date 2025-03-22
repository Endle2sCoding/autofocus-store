import { AppContainer } from "@/shared/AppContainer/AppContainer";

export function Form() {
  return (
    <section
      className="form"
      id="form"
    >
      <AppContainer className="container">
        <h3 className="form__title title">Контакты</h3>

        <form action="#">
          <div className="input__wrapper">
            <label htmlFor="name">Ваше имя</label>
            <input
              type="text"
              id="name"
              className="form__input"
            />
          </div>
          <div className="input__wrapper">
            <label htmlFor="phone">Телефон</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
              required
            />
            <input
              type="tel"
              id="phone"
              placeholder="+7 (900) 123-45-67"
              pattern="\+7\s?[\(]{0,1}9[0-9]{2}[\)]{0,1}\s?\d{3}[-]{0,1}\d{2}[-]{0,1}\d{2}"
              className="form__input"
            />
          </div>
          <input
            type="button"
            value="Отправить"
            className="form__button"
          />
        </form>

        <div className="contacts">
          <span>
            Телефон: <span className="phone"> +7(999)-999-99-99 </span>
          </span>
          <span>
            Email:<span className="email"> mail@mail.ru</span>
          </span>
          <span>
            Телеграмм <span className="tg">https://telegram.org/</span>
          </span>
        </div>
      </AppContainer>
    </section>
  );
}
