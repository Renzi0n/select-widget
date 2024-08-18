import { Popup, Input, Select, ScrollableList, TItem } from "shared";
import styles from "./EditItemsPopup.module.scss";
import { ItemsList, SelectedItemsList } from "features";
import { memo, useCallback } from "react";
import { FILTER_OPTIONS } from "./EditItemsPopup.constants";
import { useFilters, useSelectedItems } from "../lib";

type TEditItemsPopup = {
  onClose: () => void;
  onSave: (selectedItems: TItem[]) => void;
  initialSelectedItems: TItem[];
};

export const EditItemsPopup: FC<TEditItemsPopup> = memo(
  ({ onClose, onSave, initialSelectedItems }) => {
    const { selectedItems, onSelectedItemsChange, deleteSelectedItem } =
      useSelectedItems(initialSelectedItems);

    const { onSearchInputChange, onApplySelectOption, filteredItems } =
      useFilters();

    const onPopupSave = useCallback(
      () => onSave(selectedItems),
      [onSave, selectedItems]
    );

    return (
      <Popup
        visible
        onClose={onClose}
        onSave={onPopupSave}
        title="Select items"
      >
        <div className={styles.wrapper}>
          <div className={styles.filterWrapper}>
            <Input label="Search" type="text" onChange={onSearchInputChange} />
            <Select
              label="Filter"
              options={FILTER_OPTIONS}
              onApplyOption={onApplySelectOption}
            />
          </div>

          <ScrollableList>
            <ItemsList
              onCheckboxChange={onSelectedItemsChange}
              selectedItems={selectedItems}
              items={filteredItems}
            />
          </ScrollableList>

          <SelectedItemsList
            items={selectedItems}
            label="Current selected items:"
            onItemClick={deleteSelectedItem}
          />
        </div>
      </Popup>
    );
  }
);
