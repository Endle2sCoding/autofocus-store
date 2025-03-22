import { ReactNode } from "react";
import s from "./AppContainer.module.scss";
export function AppContainer({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return <div className={`${s.appContainer} ${className}`}>{children}</div>;
}
