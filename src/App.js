import Dashboard from "./container/Dashboard";
import IndexHistoryProvider from "./context/indexHistoryProvider";
import IndexProvider from "./context/indexProvider";

function App() {
  return (
    <div className="App">
      <IndexProvider>
        <IndexHistoryProvider>
          <Dashboard />
        </IndexHistoryProvider>
      </IndexProvider>
    </div>
  );
}

export default App;
