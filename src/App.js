import { useState } from "react";
import "./App.css";
import List from "./List";

function App() {
  const [number, setNumber] = useState(1);

  const getitems = () => {
    return [number, number + 1, number + 2];
  };

  return (
    <div className="App">
      <input
        type="number"
        placeholder="Enter a number"
        value={number}
        onChange={(e) => setNumber(Number(e.target.value))}
      />
      <button>ChangeTheme</button>
      <List getitems={getitems} />
    </div>
  );
}

export default App;
