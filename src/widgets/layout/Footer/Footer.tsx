import { AppContainer } from "@/shared/AppContainer/AppContainer";

export function Footer() {
  return (
    <footer className="footer">
      <AppContainer>
        <nav className="footer-nav">
          <a
            href="#banner"
            className="link"
          >
            Главная
          </a>
          <a
            href="#cards"
            className="link"
          >
            Наши услги
          </a>
          <a
            href="#about"
            className="link"
          >
            О нас
          </a>
          <a
            href="#form"
            className="link"
          >
            Запросить звонок
          </a>
          <a
            href="#form"
            className="link"
          >
            Контакты
          </a>
        </nav>
        <div className="socials">
          <a href=""></a>
        </div>
      </AppContainer>
    </footer>
  );
}
