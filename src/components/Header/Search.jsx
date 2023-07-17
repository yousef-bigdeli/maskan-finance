import { useIndexData } from "../../context/indexProvider";
import { useEffect, useState } from "react";
import Select from "react-select";
import styles from './Header.module.scss'

const Search = () => {
  const [selectOptions, setSelectOptions] = useState([]);
  const { data, isLoading } = useIndexData();
  
  useEffect(() => {
    if (!isLoading) {
      setSelectOptions(
        data.map((item) => ({ value: item.id, label: item.title }))
      );
    }
  }, [data, isLoading]);

  
  return (
    <div className={styles.searchContainer}>
      <Select
        options={selectOptions}
        isClearable
        placeholder="جستجوی نماد..."
        loadingMessage={() => 'در حال بارگزاری...'}
        isLoading={isLoading}
        noOptionsMessage={() => 'نمادی پیدا نشد.'}
      />
    </div>
  );
};

export default Search;
