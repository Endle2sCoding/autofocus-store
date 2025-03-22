import { ReactNode } from "react";
import s from "./AppText.module.scss";
type ColorType = "primary" | "inverted";
interface AppTextProps {
  children: ReactNode;
  className?: string;
  colorType?: ColorType;
  TagName?: "p" | "span";
}
export const AppText = ({
  children,
  colorType = "primary",
  TagName = "p",
  className,
}: AppTextProps) => {
  return (
    <TagName className={`${s.appText} ${className} ${s[colorType]}`}>
      {children}
    </TagName>
  );
};
