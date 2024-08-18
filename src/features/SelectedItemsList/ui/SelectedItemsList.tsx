import { SelectedItem, TItem } from "shared";
import styles from "./SelectedItemsList.module.scss";
import { memo } from "react";

type TItemsListProps = {
  items: TItem[];
  label: string;
  onItemClick: (value: number) => void;
};

export const SelectedItemsList: FC<TItemsListProps> = memo(
  ({ items, label, onItemClick }) => {
    return (
      <div className={styles.itemsListWrapper}>
        <p>{label}</p>
        <div className={styles.itemsList}>
          {items.length ? (
            items.map(({ value, label }) => (
              <SelectedItem
                key={value + label}
                value={value}
                label={label}
                onClose={onItemClick}
              />
            ))
          ) : (
            <p className={styles.emptyTitle}>No selected items</p>
          )}
        </div>
      </div>
    );
  }
);
