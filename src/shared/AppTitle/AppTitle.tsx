import { ReactNode } from "react";
import s from "./AppTitle.module.scss";
interface AppTitleProps {
  children?: ReactNode;
  className?: string;
  colorType?: "primary" | "inverted";
  TagName?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  sectionTitle?: boolean;
}

export const AppTitle = ({
  children,
  colorType = "primary",
  TagName = "h2",
  sectionTitle = false,
  className,
}: AppTitleProps) => {
  return (
    <TagName
      className={`${s.appText}  ${s[colorType]} ${
        sectionTitle ? s.sectionTitle : ""
      } ${className}`}
    >
      {children}
    </TagName>
  );
};
