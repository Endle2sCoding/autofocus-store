import { ChangeEvent, TextareaHTMLAttributes } from "react";
import s from "./AppTextarea.module.scss";
interface AppTextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  className?: string;
  value: string;
  changeInput: (value: string) => void;
  error?: string;
  placeholder: string;
}
export const AppTextarea = ({
  value,
  error,
  placeholder,
  className,
  changeInput,
  ...otherProps
}: AppTextareaProps) => {
  return (
    <div className={`${s.appTextareaWrapper} ${className}`}>
      <textarea
        placeholder={placeholder}
        className={`${s.appTextarea} ${error && s.error}`}
        value={value}
        onChange={(e: ChangeEvent<HTMLTextAreaElement>) =>
          changeInput(e.currentTarget.value)
        }
        {...otherProps}
      />
      {error && <div className={s.error}>{error}</div>}
    </div>
  );
};
