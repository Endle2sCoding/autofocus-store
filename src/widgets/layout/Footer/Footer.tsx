import { AppContainer } from "@/shared/AppContainer/AppContainer";
import s from "./Footer.module.scss";
export function Footer() {
  return (
    <footer className={s.footer}>
      <AppContainer>
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
        <div className={s.copyright}>
          {" "}
          © {new Date().getFullYear()} Все права защищены.
        </div>
      </AppContainer>
    </footer>
  );
}
