import { createPortal } from "react-dom";
import styles from "./Popup.module.scss";
import { Button } from "../Button";
import { CloseButton } from "../CloseButton";
import { useEffect, useRef } from "react";

type TPopupProps = {
  visible: boolean;
  onClose: () => void;
  onSave: () => void;
  title?: string;
};

export const Popup: FC<TPopupProps> = ({
  visible,
  onClose,
  onSave,
  title,
  children,
}) => {
  const backdropRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", onKeyDown);

    return () => {
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [onClose]);

  const onBackdropClick = (event: React.MouseEvent) => {
    if (backdropRef.current && event.target === backdropRef.current) {
      onClose();
    }
  };

  if (!visible) return null;

  return createPortal(
    <div
      className={styles.popupBackdrop}
      ref={backdropRef}
      onClick={onBackdropClick}
    >
      <div className={styles.popup}>
        <CloseButton className={styles.closeButton} onClick={onClose} />

        <div className={styles.popupContent}>
          {title && <h2 className={styles.title}>{title}</h2>}

          {children}
        </div>

        <div className={styles.popupFooter}>
          <Button className={styles.footerButton} onClick={onSave}>
            Save
          </Button>
          <Button
            variant="decline"
            className={styles.footerButton}
            onClick={onClose}
          >
            Cancel
          </Button>
        </div>
      </div>
    </div>,
    document.body
  );
};
