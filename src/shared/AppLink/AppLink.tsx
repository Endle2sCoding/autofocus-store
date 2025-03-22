import { AnchorHTMLAttributes, ReactNode } from "react";
import s from "./AppLink.module.scss";

interface AppLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  children: ReactNode;
  className?: string;
  decorator?: "clear" | "filled";
  colorType?: "primary" | "inverted" | "accented";
}
export const AppLink = ({
  children,
  className,
  colorType = "primary",
  decorator = "clear",
  ...otherProps
}: AppLinkProps) => {
  return (
    <a
      className={`${s.appLink} ${s[decorator]} ${s[colorType]} ${className}`}
      {...otherProps}
    >
      {children}
    </a>
  );
};
