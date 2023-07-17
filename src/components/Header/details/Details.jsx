import IndexChart from "./IndexChart";
import IndexTable from "./IndexTable";
import styles from "./Details.module.scss";

const Details = () => {
  return (
    <section className={styles.wrapper}>
      <h2>شاخص کل</h2>
      <div className={styles.row}>
        <IndexTable />
        <IndexChart />
      </div>
    </section>
  );
};

export default Details;
