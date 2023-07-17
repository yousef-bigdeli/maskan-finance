import styles from "./IndexTable.module.scss";

const IndexTable = () => {
  return (
    <div className={styles["indexTable-wrapper"]}>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>تاریخ</th>
            <th>پایانی</th>
            <th>کمترین</th>
            <th>بیشترین</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default IndexTable;
