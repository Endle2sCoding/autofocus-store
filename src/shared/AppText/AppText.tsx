import { ReactNode } from "react";
import s from "./AppText.module.scss";
type ColorType = "primary" | "invertedPrimary";
interface AppTextProps {
  children: ReactNode;
  className?: string;
  colorType?: ColorType;
}
export const AppText = ({
  children,
  colorType = "primary",
  className,
}: AppTextProps) => {
  return (
    <div className={`${s.appText} ${className} ${s[colorType]}`}>
      {children}
    </div>
  );
};
