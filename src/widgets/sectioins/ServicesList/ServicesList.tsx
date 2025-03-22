import { AppContainer } from "@/shared/AppContainer/AppContainer";
import s from "./ServicesList.module.scss";
import { AppTitle } from "@/shared/AppTitle/AppTitle";
import { ServicesItem } from "./ServicesItem";
export function ServicesList() {
  return (
    <section
      className={s.servicesList}
      id="cards"
    >
      <AppContainer>
        <AppTitle className={s.title}>Наши услуги</AppTitle>
        <div className={s.cards}>
          {new Array(4)
            .fill({ title: "", desc: "desc" })
            .map(({ title, desc }, i) => (
              <ServicesItem
                title={title}
                desc={desc}
                key={i}
              />
            ))}
          {/* <div className={s.card}>
            <h4 className="card__title">Автофoкуc для СО2 лазерныx стaнков.</h4>
            <p className="desc">
              Имеютcя версии для cтaнкoв c cтaндapтной кареткой HGH - гoловы C
              sеries и E seriеs (wаttsan, rаylоgiс, nоnamе и другие), a тaк же
              для стaнков с каpеткoй под верхниe или бокoвые poликовые
              напpавляющиe - гoловы inner slide tyре (taurus, нaпpимеp) и outer
              slide typе. Имеются и другие версии. Если Вашей нет- возможна
              разработка для Вашей головы, в этом случае УСТРОЙСТВО ОБОЙДЕТСЯ
              ДЕШЕВЛЕ!
            </p>
          </div>
          <div className={s.servicesItem}>
            <h4 className="card__title">
              Установкаю, настройка, споровождение
            </h4>
            <p className="desc">desc</p>
          </div>
          <div className={s.card}>
            <h4 className="card__title">Гарантийная замена или обсулживание</h4>
            <p className="desc">desc</p>
          </div>
          <div className={s.card}>
            <h4 className="card__title">
              Большой ряд поддерживаемоего обурдования
            </h4>
            <p className="desc">
              Имеютcя версии для cтaнкoв c cтaндapтной кареткой HGH - гoловы C
              sеries и E seriеs (wаttsan, rаylоgiс, nоnamе и другие), a тaк же
              для стaнков с каpеткoй под верхниe или бокoвые poликовые
              напpавляющиe - гoловы inner slide tyре (taurus, нaпpимеp) и outer
              slide typе. Имеются и другие версии. Если Вашей нет- возможна
              разработка для Вашей головы, в этом случае УСТРОЙСТВО ОБОЙДЕТСЯ
              ДЕШЕВЛЕ!
            </p>
          </div> */}
        </div>
      </AppContainer>
    </section>
  );
}
