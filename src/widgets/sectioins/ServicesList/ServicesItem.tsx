import s from "./ServicesItem.module.scss";
export function ServicesItem({ title, desc }: { title: string; desc: string }) {
  return (
    <div className={s.servicesItem}>
      <h4 className="card__title">
        {title || "Установкаю, настройка, споровождение"}
      </h4>
      <p className="desc">{desc || "desc"}</p>
    </div>
  );
}
