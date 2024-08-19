import { SelectedItemsList } from "features";
import { useState } from "react";
import { Button, TItem } from "shared";
import { EditItemsPopup, useSelectedItems } from "widgets";
import styles from "./main.module.scss";
import { SelectedItemsStorage } from "../lib/localeStorage";

export const MainPage = () => {
  const [isPopupVisible, setPopupVisible] = useState(false);
  const openPopup = () => setPopupVisible(true);
  const closePopup = () => setPopupVisible(false);

  const { selectedItems, deleteSelectedItem, setSelectedItems } =
    useSelectedItems(SelectedItemsStorage.getSelectedItems());

  const onSaveItems = (savedItems: TItem[]) => {
    setSelectedItems(savedItems);
    SelectedItemsStorage.setSelectedItems(savedItems);
    closePopup();
  };

  const deleteSelectedItemWithLocaleStorage = (value: number) => {
    deleteSelectedItem(value);
    SelectedItemsStorage.deleteItem(value);
  };

  const resetSelectedItems = () => {
    setSelectedItems([]);
    SelectedItemsStorage.setSelectedItems([]);
  };

  return (
    <div className={styles.pageWrapper}>
      <h1>Select items</h1>

      <SelectedItemsList
        items={selectedItems}
        label={`You currently have ${selectedItems.length} selected items`}
        onItemClick={deleteSelectedItemWithLocaleStorage}
      />

      <Button onClick={openPopup}>Change my choice</Button>

      <Button variant="decline" onClick={resetSelectedItems}>
        Reset items
      </Button>

      {isPopupVisible && (
        <EditItemsPopup
          initialSelectedItems={selectedItems}
          onSave={onSaveItems}
          onClose={closePopup}
        />
      )}
    </div>
  );
};
