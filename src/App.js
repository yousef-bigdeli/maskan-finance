import Dashboard from "./container/Dashboard";
import IndexProvider from "./context/indexProvider";

function App() {
  return (
    <div className="App">
      <IndexProvider>
        <Dashboard />
      </IndexProvider>
    </div>
  );
}

export default App;
