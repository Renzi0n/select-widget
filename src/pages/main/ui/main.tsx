import { SelectedItemsList } from "features";
import { useState } from "react";
import { Button, TItem } from "shared";
import { EditItemsPopup, useSelectedItems } from "widgets";
import styles from "./main.module.scss";

export const MainPage = () => {
  // Popup
  const [isPopupVisible, setPopupVisible] = useState(false);
  const openPopup = () => setPopupVisible(true);
  const closePopup = () => setPopupVisible(false);

  // Selected items of all app
  const { selectedItems, deleteSelectedItem, setSelectedItems } =
    useSelectedItems();

  const onSaveItems = (savedItems: TItem[]) => {
    setSelectedItems(savedItems);
    closePopup();
  };

  return (
    <div className={styles.pageWrapper}>
      <h1>Select items</h1>

      <SelectedItemsList
        items={selectedItems}
        label={`You currently have ${selectedItems.length} selected items`}
        onItemClick={deleteSelectedItem}
      />

      <Button onClick={openPopup}>Change my choice</Button>

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
