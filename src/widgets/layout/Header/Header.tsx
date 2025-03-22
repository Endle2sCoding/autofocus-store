import { AppIcon } from "@/shared/AppIcon/AppIcon";
import { AppContainer } from "../../../shared/AppContainer/AppContainer";
import s from "./Header.module.scss";
import Logo from "@/assets/logo.svg?react";
import { AppLink } from "@/shared/AppLink/AppLink";
import { Link } from "react-router-dom";

// const navLinks=[{}]
export const Header = () => {
  return (
    <header>
      <AppContainer className={s.container}>
        <Link to="/">
          <AppIcon Svg={Logo} />
        </Link>

        <div className={s.burger}>
          <span></span>
        </div>
        <nav>
          <ul className={s.list}>
            <li>
              <AppLink
                href="#banner"
                className="link"
              >
                Главная
              </AppLink>
            </li>
            <li>
              <AppLink
                href="#cards"
                className="link"
              >
                Наши услги
              </AppLink>
            </li>
            <li>
              <AppLink
                href="#about"
                className="link"
              >
                О нас
              </AppLink>
            </li>
            {/* <li>
                <AppLink
                  href="#form"
                  className="link"
                >
                  Запросить звонок
                </AppLink>
              </li> */}
            <li>
              <AppLink
                href="#contacts"
                className="link"
              >
                Контакты
              </AppLink>
            </li>
          </ul>
        </nav>
      </AppContainer>
    </header>
  );
};
