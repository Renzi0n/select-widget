import { TItem } from "shared";

const ITEMS_STORAGE_KEY = "selectedItems";

const getSelectedItems = () =>
  localStorage
    ? (JSON.parse(localStorage.getItem(ITEMS_STORAGE_KEY) || "[]") as TItem[])
    : [];

const setSelectedItems = (items: TItem[]) =>
  localStorage.setItem(ITEMS_STORAGE_KEY, JSON.stringify(items));

const deleteItem = (value: number) => {
  const selectedItems = getSelectedItems();
  localStorage.setItem(
    ITEMS_STORAGE_KEY,
    JSON.stringify(
      selectedItems.filter((selectedItem) => selectedItem.value !== value)
    )
  );
};

export const SelectedItemsStorage = {
  getSelectedItems,
  setSelectedItems,
  deleteItem,
};
