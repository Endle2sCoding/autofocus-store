import { Link } from "react-router-dom";
import s from "./NotFoundPage.module.scss";
const NotFoundPage = () => {
  return (
    <section className={s.notFoundPage}>
      {/* <div>Page not found</div> */}
      <div>Страница не найдена</div>
      <Link to="/">Вернуться на главную</Link>
    </section>
  );
};

export default NotFoundPage;
