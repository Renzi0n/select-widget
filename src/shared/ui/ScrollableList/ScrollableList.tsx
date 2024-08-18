import styles from "./ScrollableList.module.scss";

export const ScrollableList: FC = ({ children }) => {
  return (
    <div className={styles.list}>
      <div className={styles.wrapper}>{children}</div>
    </div>
  );
};
