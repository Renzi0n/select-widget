import { InputHTMLAttributes, memo } from "react";
import styles from "./Input.module.scss";
import cn from "classnames";

type TInputProps = InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  isPreventDefault?: boolean;
};

type TPreventDefaultEvents =
  | React.FocusEvent<HTMLInputElement, Element>
  | React.MouseEvent<HTMLInputElement, MouseEvent>
  | React.MouseEvent<HTMLLabelElement, MouseEvent>;

export const Input: FC<TInputProps> = memo(
  ({ label, isPreventDefault, ...props }) => {
    const preventDefault = <T extends TPreventDefaultEvents>(evt: T) =>
      evt.preventDefault();

    const onClick = isPreventDefault ? preventDefault : undefined;

    return (
      <label className={styles.inputContainer} onClick={onClick}>
        <p className={styles.label}>{label}</p>
        <input
          className={cn(styles.input, isPreventDefault && styles.disableCaret)}
          {...props}
          onFocus={onClick}
          onClick={onClick}
        />
      </label>
    );
  }
);
