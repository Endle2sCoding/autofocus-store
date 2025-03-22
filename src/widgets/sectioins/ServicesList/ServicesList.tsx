import { AppContainer } from "@/shared/AppContainer/AppContainer";
import s from "./ServicesList.module.scss";
import { AppTitle } from "@/shared/AppTitle/AppTitle";
import { ServicesItem } from "./ServicesItem";
const list = [
  {
    title:
      "Автофокус для CO2 лазерных станков для большинства востребованых станков",
    desc: "Существуют версии для станков со стандартной кареткой HGH - головки серии C и серии E (wattsan, railogic, noname и другие), а также для станков с кареткой для верхних или боковых роликовых направляющих - головки внутреннего типа (например, Taurus) и наружного типа",
  },
  {
    title: "Разработка под ваше оборудование",
    desc: "Существует множество версий разного оборудования и ПО.Если Вашей нет в основном перечне, то возможна разработка для Вашей системы/гоовы/стойки.Более того в этом случае УСТРОЙСТВО ОБОЙДЕТСЯ ДЕШЕВЛЕ!",
  },
  {
    title: "Установка, настройка, споровождение",
    desc: "Нащи специалисты охватывают большинство городов России и СНГ и смогут  решить любые проблемы. Также готовы рассмотреть командировки в по ЕвроАзиатскому континету и Африке",
  },
  {
    title: "Гарантийная замена или обсулживание",
    desc: "На наше оборудование осуществляется гарантия, дополнительно можно заключить догвор на обсулживние, перепрошивку или замену на новую модель",
  },
];
export function ServicesList() {
  return (
    <section
      className={s.servicesList}
      id="cards"
    >
      <AppContainer>
        <AppTitle
          sectionTitle
          className={s.title}
        >
          Наши услуги
        </AppTitle>
        <div className={s.cards}>
          {list.map(({ title, desc }, i) => (
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
