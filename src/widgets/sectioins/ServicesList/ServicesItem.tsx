import s from "./ServicesItem.module.scss";
export function ServicesItem({ title, desc }: { title: string; desc: string }) {
  return (
    <div className={s.servicesItem}>
      <h4 className="card__title">
        {title}
      </h4>
      <p className="desc">{desc}</p>
    </div>
  );
}
