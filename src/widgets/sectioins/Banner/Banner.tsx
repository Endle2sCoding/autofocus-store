import { AppContainer } from "@/shared/AppContainer/AppContainer";
import { AppTitle } from "@/shared/AppTitle/AppTitle";
import { AppLink } from "@/shared/AppLink/AppLink";
import s from "./Banner.module.scss";

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
          TagName="h1"
          colorType="inverted"
          className={s.title}
        >
          Автофокус для CO2 лазерных станков
        </AppTitle>
        <AppTitle
          TagName="h3"
          colorType="inverted"
        >
          Современные технологии для бизеса
        </AppTitle>
        <AppLink
          decorator="filled"
          colorType="inverted"
          href="#contacts"
          className={s.button}
        >
          Связаться с нами
        </AppLink>
      </AppContainer>
    </div>
  );
};
