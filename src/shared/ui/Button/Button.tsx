import { ButtonHTMLAttributes } from "react";
import cn from "classnames";
import styles from "./button.module.scss";

type TButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "accept" | "decline";
};

export const Button: FC<TButtonProps> = ({
  children,
  className,
  variant = "accept",
  ...props
}) => {
  return (
    <button
      className={cn(styles.button, styles[variant], className)}
      {...props}
    >
      {children}
    </button>
  );
};
