import { createContext, useContext, useState } from "react";

const IndexHistory = createContext();
const IndexHistoryDispatcher = createContext();

const IndexHistoryProvider = ({ children }) => {
  const [historyData, setHistoryData] = useState(null);

  // Get data and store globally
  const handleHistoryData = (data) => {
    setHistoryData(data);
  };

  return (
    <IndexHistory.Provider value={historyData}>
      <IndexHistoryDispatcher.Provider value={handleHistoryData}>
        {children}
      </IndexHistoryDispatcher.Provider>
    </IndexHistory.Provider>
  );
};

export default IndexHistoryProvider;

// custom Hook for use index histoy data and dispatch new data
export const useIndexHistoryData = () => useContext(IndexHistoryProvider);
export const useIndexHistoryDispatcher = () =>
  useContext(IndexHistoryDispatcher);
