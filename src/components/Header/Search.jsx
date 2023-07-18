import { useEffect, useState } from "react";
// helper
import { getIndexHistory } from "../../utils/api/tsetmc-api";
import { highchartsDataConvert } from "../../utils/helpers/highchartsDataConverter";
// Context
import { useIndexData } from "../../context/indexProvider";
import { useIndexHistoryDispatcher } from "../../context/indexHistoryProvider";
// Components
import Select from "react-select";
// Style
import styles from "./Header.module.scss";

const Search = () => {
  const [selectOptions, setSelectOptions] = useState([]); // default values for React Select component
  const [selectedIndex, setSelectedIndex] = useState(null); // Selected index by user

  const { data, isLoading } = useIndexData(); // get indexes data from context store
  const dispatchHistory = useIndexHistoryDispatcher(); // dispatcher for index history

  // Get index values
  useEffect(() => {
    if (!isLoading) {
      setSelectOptions(
        data.map((item) => ({ value: item.id, label: item.title }))
      );
    }
  }, [data, isLoading]);

  // ****************** Handle serch input
  const handleIndexSearch = (selected) => {
    setSelectedIndex(selected);
  };

  useEffect(() => {
    // when send multiple request, can abort them
    const controller = new AbortController();

    // Fetch History when user selected index
    const getHistory = async () => {
      dispatchHistory({ type: "REQUEST_START" });
      try {
        const data = await getIndexHistory(
          selectedIndex.value,
          controller.signal
        );

        const convertedData = highchartsDataConvert(data.indexB2);
        dispatchHistory({
          type: "REQUEST_FULFILLED",
          payload: { title: selectedIndex.label, history: convertedData },
        });
      } catch (error) {
        dispatchHistory({ type: "REQUEST_FAILD", payload: error.message });
      }
    };

    if (selectedIndex) {
      getHistory();
    } else {
      dispatchHistory({ type: "REQUEST_FULFILLED", payload: {} });
    }

    // Clean up => abort all requests when sending a new requests before get the result
    return () => {
      controller.abort();
    };
  }, [selectedIndex]);

  // ****************************
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
