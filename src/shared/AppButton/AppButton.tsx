import { ButtonHTMLAttributes, ReactNode } from "react";
import s from "./AppButton.module.scss";
interface AppButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  className?: string;
  decorator?: "clear";
  colorType?: "primary" | "inverted" | "accented";
}
export const AppButton = ({
  children,
  decorator = "clear",
  colorType = "primary",
  className,
}: AppButtonProps) => {
  return (
    <button
      className={`${s.appButton} ${s[decorator]} ${s[colorType]} ${className}`}
    >
      {children}
    </button>
  );
};
