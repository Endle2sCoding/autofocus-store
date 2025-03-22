import { AppContainer } from "@/shared/AppContainer/AppContainer";
import s from "./Banner.module.scss";

import { AppTitle } from "@/shared/AppTitle/AppTitle";
import { AppLink } from "@/shared/AppLink/AppLink";
interface BannerProps {
  className?: string;
}
export const Banner = ({ className }: BannerProps) => {
  return (
    <div
      id="banner"
      className={`${s.banner} ${className}`}
    >
      <AppContainer className={s.container}>
        <AppTitle
          Title="h1"
          colorType="invertedPrimary"
          className={s.title}
        >
          Автофокус для CO2 лазерных станков
        </AppTitle>
        <AppTitle colorType="invertedPrimary">
          Современные технологии для бизеса
        </AppTitle>
        <AppLink
          decorator="filled"
          colorType="inverted"
          href="#form"
          className={s.button}
        >
          Запросить звонок
        </AppLink>
      </AppContainer>
    </div>
  );
};
