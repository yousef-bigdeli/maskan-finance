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
    return <div className={styles.loading}>در حال بارگزاری...</div>;
  }

  // Has error
  // TODO: Style the error warning
  if (!isLoading && error) return <h2>دریافت اطلاعات با مشکل مواجه شد.</h2>;

  if (!isLoading && !data.history) return <h2 className={styles.loading}>نمادی انتخاب نشده است.</h2>;

  // Show results
  return (
    <section className={styles.wrapper}>
      {!isLoading && (
        <>
          <h2>{data.title}</h2>
          <div className={styles.row}>
            <IndexTable data={data.history} />
            <IndexChart data={data} />
          </div>
        </>
      )}
    </section>
  );
};

export default Details;
