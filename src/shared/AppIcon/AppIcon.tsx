import { FunctionComponent, SVGProps } from "react";
import s from "./AppIcon.module.scss";

type ColorType = "primary";
interface AppIconProps extends SVGProps<SVGElement> {
  className?: string;
  Svg: FunctionComponent<SVGProps<SVGSVGElement>>;
  colorType?: ColorType;
}
export const AppIcon = ({
  Svg,
  width = 75,
  height = 75,
  className,
  colorType = "primary",
}: AppIconProps) => {
  return (
    <Svg
      width={width}
      height={height}
      className={`123${s.appIcon} ${className} ${s[colorType]}`}
    />
  );
};
