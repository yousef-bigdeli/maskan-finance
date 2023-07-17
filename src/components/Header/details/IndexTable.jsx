import { useEffect, useRef, useState } from "react";
import styles from "./IndexTable.module.scss";

const IndexTable = ({ data }) => {
  // Virtual scroll for loading data
  const [visibleData, setVisibleData] = useState([]);
  const [lastRow, setLastRow] = useState(40);
  const tableContainerRef = useRef(null);
  const rowHeight = 40;
  const tableHeight = 400;

  const handleScroll = () => {
    const scrollTop = tableContainerRef.current.scrollTop;

    if (!visibleData.length) {
      const newData = data.slice(0, lastRow);
      setVisibleData(newData);
    } else {
      if (scrollTop > tableHeight * (lastRow / 20)) {
        const newData = data.slice(lastRow, lastRow + rowHeight);
        setVisibleData((prevState) => [...prevState, ...newData]);
        setLastRow(lastRow + rowHeight);
      }
    }
  };

  useEffect(() => {
    handleScroll();
  }, [data]);

  return (
    <div
      className={styles["indexTable-wrapper"]}
      onScroll={handleScroll}
      ref={tableContainerRef}
    >
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
          {!visibleData.length ? (
            <tr>
              <td colSpan={4} className={styles.loading}>
                درحال بارگزاری...
              </td>
            </tr>
          ) : (
            visibleData.map((item, index) => {
              const date = new Date(item[0]).toLocaleString();

              return (
                <tr key={index}>
                  <td>{date}</td>
                  <td>{item[3]}</td>
                  <td>{item[1]}</td>
                  <td>{item[2]}</td>
                </tr>
              );
            })
          )}
        </tbody>
      </table>
    </div>
  );
};

export default IndexTable;
