import { memo, useMemo } from "react";
import { Checkbox, TItem } from "shared";
import { MAX_SELECTED_ITEMS } from "./ItemsList.constansts";

type TItemsListProps = {
  items: TItem[];
  selectedItems: TItem[];
  onCheckboxChange: (checked: boolean, item: TItem) => void;
};

export const ItemsList: FC<TItemsListProps> = memo(
  ({ items, selectedItems, onCheckboxChange }) => {
    const selectedValues = useMemo(
      () => selectedItems.map(({ value: val }) => val),
      [selectedItems]
    );

    return items.map(({ label, value }) => {
      const isChecked = selectedValues.includes(value);
      const isDisabled =
        selectedItems.length === MAX_SELECTED_ITEMS && !isChecked;

      return (
        <Checkbox
          key={value + label}
          label={label}
          value={value}
          checked={isChecked}
          disabled={isDisabled}
          onChange={onCheckboxChange}
        />
      );
    });
  }
);
