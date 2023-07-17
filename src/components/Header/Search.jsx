import { useEffect, useState } from "react";
// Api helper
import { getIndexHistory } from "../../utils/api/tsetmc-api";
// Context
import { useIndexData } from "../../context/indexProvider";
import { useIndexHistoryDispatcher } from "../../context/indexHistoryProvider";
// Components
import Select from "react-select";
// Style
import styles from "./Header.module.scss";
import { combineDayHistory } from "../../utils/helpers/combineDayHistory";

const Search = () => {
  const [selectOptions, setSelectOptions] = useState([]);
  const [selectedIndex, setSelectedIndex] = useState(null);
  const { data, isLoading } = useIndexData();
  const dispatchHistory = useIndexHistoryDispatcher();

  // Get index values
  useEffect(() => {
    if (!isLoading) {
      setSelectOptions(
        data.map((item) => ({ value: item.id, label: item.title }))
      );
    }
  }, [data, isLoading]);

  // **** Handle serch input
  const handleIndexSearch = (selected) => {
    setSelectedIndex(selected);
  };

  useEffect(() => {
    // when send multiple request, can abort them
    const controller = new AbortController();

    // Fetch History when user selected index
    const getHistory = async () => {
      const data = await getIndexHistory(
        selectedIndex.value,
        controller.signal
      );
      dispatchHistory(data.indexB2);

      const cda = combineDayHistory(data.indexB2);
      console.log(cda);
    };

    if (selectedIndex) {
      getHistory();
    } else {
      dispatchHistory(null);
    }

    // Clean up => abort all requests when sending a new requests before get the result
    return () => {
      controller.abort();
    };
  }, [selectedIndex]);

  return (
    <div className={styles.searchContainer}>
      <Select
        options={selectOptions}
        isClearable
        placeholder="جستجوی نماد..."
        loadingMessage={() => "در حال بارگزاری..."}
        isLoading={isLoading}
        noOptionsMessage={() => "نمادی پیدا نشد."}
        value={selectedIndex}
        onChange={handleIndexSearch}
      />
    </div>
  );
};

export default Search;
