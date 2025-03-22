import { AppContainer } from "@/shared/AppContainer/AppContainer";
import { AppTitle } from "@/shared/AppTitle/AppTitle";
import s from "./About.module.scss";
export function About() {
  return (
    <section
      className="about"
      id="about"
    >
      <AppContainer className={s.container}>
        <div className="about__inner">
          <AppTitle sectionTitle>О нас</AppTitle>
          <p className="about__text">
            Мы молодая развивающася компания, предоставляющая услуги по
            модернизации деревообрабатывающих станков. Работаем по России и СНГ.
            Мы предлагаем иновационные решения, эффективность и оптимизацию
            оборудования.
          </p>
        </div>
      </AppContainer>
    </section>
  );
}
