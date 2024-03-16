import "./App.css";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  StateType,
  decrement,
  increment,
  incrementByValue,
} from "./components/redux";

const App = () => {
  const [val, setVal] = useState<number>(0);
  const dispatch = useDispatch();
  const count = useSelector((state: StateType) => state.count);
  const incrementByValueHandler = () => {
    dispatch(incrementByValue(val));
  };
  const decrementButton = () => {
    dispatch(decrement());
  };
  const incrementButton = () => {
    dispatch(increment());
  };
  return (
    <div>
      <h1>Toolkit</h1>
      <h3>Count : {count}</h3>
      <button onClick={incrementButton}>+</button>
      <button onClick={decrementButton}>-</button>
      <input
        type="number"
        value={val}
        onChange={(e) => setVal(Number(e.target.value))}
      />
      <button disabled={val < 0} onClick={incrementByValueHandler}>
        Add
      </button>
    </div>
  );
};

export default App;
