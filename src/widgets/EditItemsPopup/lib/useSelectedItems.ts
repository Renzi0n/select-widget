import { useCallback, useState } from "react";
import { TItem } from "shared";

export const useSelectedItems = (
  initialSelectedItems: TItem[] | undefined = []
) => {
  const [selectedItems, setSelectedItems] =
    useState<TItem[]>(initialSelectedItems);

  const deleteSelectedItem = useCallback((value: number) => {
    setSelectedItems((prevSelectedItems) =>
      prevSelectedItems.filter(
        (prevSelectedItem) => prevSelectedItem.value !== value
      )
    );
  }, []);

  const onSelectedItemsChange = useCallback(
    (isChecked: boolean, item: TItem) => {
      if (isChecked) return setSelectedItems((prev) => [...prev, item]);

      deleteSelectedItem(item.value);
    },
    [deleteSelectedItem]
  );

  return {
    selectedItems,
    setSelectedItems,
    onSelectedItemsChange,
    deleteSelectedItem,
  };
};
