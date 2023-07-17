// Components
import IndexChart from "../components/Header/details/IndexChart";
import IndexTable from "../components/Header/details/IndexTable";
// Context
import { useIndexHistoryData } from "../context/indexHistoryProvider";
// Styles & assets
import styles from "./Details.module.scss";
import loading from "../assets/svg/Dual-Ring.svg";

const Details = () => {
  const { data, isLoading, error } = useIndexHistoryData();

  // Loading Data
  if (isLoading) {
    return (
      <div className={styles.loading}>
        <img src={loading} alt="" />
      </div>
    );
  }

  // Has error
  // TODO: Style the error warning
  if (!isLoading && error) return <h2>دریافت اطلاعات با مشکل مواجه شد.</h2>;

  // Show results
  return (
    <section className={styles.wrapper}>
      {!isLoading && (
        <>
          <h2>شاخص کل</h2>
          <div className={styles.row}>
            <IndexTable data={data} />
            <IndexChart />
          </div>
        </>
      )}
    </section>
  );
};

export default Details;
