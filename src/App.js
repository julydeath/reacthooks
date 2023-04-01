import { useEffect, useRef, useState } from "react";
import "./App.css";

function App() {
  const [name, setName] = useState("");
  const renderCount = useRef(1);
  const inputRef = useRef();
  // const [renderCount, setRenderCount] = useState(0);

  // useEffect(() => {
  //   setRenderCount((prev) => prev + 1);
  // }, [name]);

  useEffect(() => {
    renderCount.current = renderCount.current + 1;
  });

  const focusHere = () => {
    inputRef.current.focus();
  };

  return (
    <div className="App">
      <input
        ref={inputRef}
        type="text"
        onChange={(e) => setName(e.target.value)}
      />
      {name}
      <p>i rendered {renderCount.current} times</p>
      <button onClick={() => focusHere()}>Focus</button>
    </div>
  );
}

export default App;
