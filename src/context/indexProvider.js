import { createContext, useContext, useEffect, useState } from "react";
import { getAllIndex } from "../utils/api/tsetmc-api";

const Index = createContext();

const IndexProvider = ({ children }) => {
  const [indexData, setIndexData] = useState({
    data: [],
    isLoading: true,
    error: null,
  });

  useEffect(() => {
    getAllIndex()
      .then((data) => {
        // get All index data and filter just id and title of indexes
        const filteredData = data.indexB1.map((item) => ({
          id: item.insCode,
          title: item.lVal30,
        }));

        setIndexData((prevState) => ({
          data: filteredData,
          isLoading: false,
          error: null,
        }));
      })
      .catch((error) =>
        setIndexData((prevState) => ({
          data: [],
          isLoading: false,
          error: "خطا در دریافت اطلاعات شاخص ها",
        }))
      );
  }, []);

  return <Index.Provider value={indexData}>{children}</Index.Provider>;
};

export default IndexProvider;

// custom Hook for use index data
export const useIndexData = () => useContext(Index);
