import { TItem } from "shared/types/items";
import styles from "./Checkbox.module.scss";

type TCheckboxProps = {
  label: string;
  value: number;
  onChange: (checked: boolean, item: TItem) => void;
  disabled?: boolean;
  checked?: boolean;
};

export const Checkbox: FC<TCheckboxProps> = ({
  label,
  value,
  onChange,
  checked = false,
  disabled,
}) => {
  const onCheckboxChange = () => onChange(!checked, { label, value });

  return (
    <label className={styles.checkboxContainer}>
      <input
        type="checkbox"
        checked={checked}
        onChange={onCheckboxChange}
        className={styles.checkbox}
        disabled={disabled}
      />
      <span className={styles.checkmark} />
      <p className={styles.label}>{label}</p>
    </label>
  );
};
