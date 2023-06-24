import { useState } from "react";

const Usetutorial1 = () => {
  const [counter, setCounter] = useState(0);
  const [inputvalue, setinputvalue] = useState("suii");
  function increase() {
    setCounter(counter + 1);
  }
  function decrease() {
    setCounter(counter - 1);
  }
  function back() {
    setCounter(0);
  }
  let onChange = (event) => {
    const newValue = event.target.value;
    setinputvalue(newValue);
  };
  return (
    <>
      <p>{counter}</p>
      <button onClick={increase}>increment</button>
      <button onClick={decrease}>decrement</button>
      <button onClick={back}>default</button>
      <input onChange={onChange} />
      {inputvalue}
    </>
  );
};
export default Usetutorial1;
