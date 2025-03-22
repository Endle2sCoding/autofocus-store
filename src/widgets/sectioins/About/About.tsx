import { AppContainer } from "@/shared/AppContainer/AppContainer";

export function About() {
  return (
    <section
      className="about"
      id="about"
    >
      <AppContainer className="container">
        <div className="about__inner">
          <h3 className="title">О нас</h3>
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
