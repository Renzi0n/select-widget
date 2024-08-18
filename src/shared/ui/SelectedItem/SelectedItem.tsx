import cn from "classnames";
import styles from "./SelectedItem.module.scss";
import { CloseButton } from "../CloseButton";

type TSelectedItemProps = {
  value: number;
  label: string;
  onClose: (value: number) => void;
};

export const SelectedItem: FC<TSelectedItemProps> = ({
  className,
  label,
  value,
  onClose,
}) => {
  return (
    <button
      className={cn(styles.selectedItem, className)}
      onClick={() => onClose(value)}
    >
      <p>{label}</p>
      <CloseButton className={styles.closeBtn} />
    </button>
  );
};
