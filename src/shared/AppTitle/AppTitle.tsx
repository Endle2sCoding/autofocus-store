import { ReactNode } from "react";
import s from "./AppTitle.module.scss";
interface AppTitleProps {
  children?: ReactNode;
  className?: string;
  colorType?: "primary" | "invertedPrimary";
  Title?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
}

export const AppTitle = ({
  children,
  colorType = "primary",
  Title = "h2",
  className,
}: AppTitleProps) => {
  return (
    <Title className={`${s.appText} ${className} ${s[colorType]}`}>
      {children}
    </Title>
  );
};
