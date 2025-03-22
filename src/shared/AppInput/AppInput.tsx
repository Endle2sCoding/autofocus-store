import { ChangeEvent, InputHTMLAttributes } from "react";
import s from "./AppInput.module.scss";
interface AppInputProps extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  value: string;
  changeInput: (value: string) => void;
  error?: string;
  placeholder: string;
}
export const AppInput = ({
  value,
  error,
  placeholder,
  className,
  changeInput,
  ...otherProps
}: AppInputProps) => {
  return (
    <div className={`${s.appInputWrapper} ${className}`}>
      <input
        placeholder={placeholder}
        className={`${s.appInput} ${error && s.error}`}
        value={value}
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          changeInput(e.currentTarget.value)
        }
        {...otherProps}
      />
      {error && <div className={s.error}>{error}</div>}
    </div>
  );
};
