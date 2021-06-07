import React, { useState, useEffect } from "react";
import "./styles.css";

const Child = (props) => {
  const { count } = props;
  const [input, setInput] = useState("hadi bir şeyler yaz buraya");

  useEffect(() => {
    console.log("count'un mount ve update olduğu durumlarda çalışırım");
  }, [count]);

  return (
    <div className="Child">
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <h2>{count}</h2>
    </div>
  );
};

const App = () => {
  const [count, setCount] = useState(0);

  const handleMinus = () => {
    setCount(count - 1);
  };

  const handlePlus = () => {
    setCount(count + 1);
  };

  return (
    <div className="App">
      <button onClick={handleMinus}>-</button>
      <Child count={count} />
      <button onClick={handlePlus}>+</button>
    </div>
  );
};

export default App;
