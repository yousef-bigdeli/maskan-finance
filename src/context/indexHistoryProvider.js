import { createContext, useContext, useReducer } from "react";

const IndexHistory = createContext();
const IndexHistoryDispatcher = createContext();

// Define the initial state
const initialState = {
  data: [],
  isLoading: false,
  error: null,
};

// Define the reducer function
const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case "REQUEST_START":
      return { ...state, isLoading: true };
    case "REQUEST_FULFILLED":
      return { data: action.payload, isLoading: false, error: null };
    case "REQUEST_FAILD":
      return { data: [], isLoading: false, error: action.payload };
    default:
      return state;
  }
};

const IndexHistoryProvider = ({ children }) => {
  const [historyData, dispatch] = useReducer(reducer, initialState);

  return (
    <IndexHistory.Provider value={historyData}>
      <IndexHistoryDispatcher.Provider value={dispatch}>
        {children}
      </IndexHistoryDispatcher.Provider>
    </IndexHistory.Provider>
  );
};

export default IndexHistoryProvider;

// custom Hook for use index histoy data and dispatch new data
export const useIndexHistoryData = () => useContext(IndexHistory);
export const useIndexHistoryDispatcher = () =>
  useContext(IndexHistoryDispatcher);
