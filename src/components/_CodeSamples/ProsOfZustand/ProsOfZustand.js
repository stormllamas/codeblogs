import React, { Fragment } from "react";
import useStore from "./store";

const SayHello = () => {
  const hello = useStore((state) => state.hello);
  console.log("[SayHello] is running");
  return <h1>{hello}</h1>;
};

const ShowResult = () => {
  const count = useStore((state) => state.count);
  console.log("[ShowResult] is running");
  return <h1>{count}</h1>;
};

const IncrementCounter = () => {
  const increment = useStore((state) => state.increment);
  console.log("[IncrementCounter] is running");
  return <button onClick={increment}> Increment</button>;
};

const DecrementCounter = () => {
  const decrement = useStore((state) => state.decrement);
  console.log("[DecrementCounter] is running");
  return <button onClick={decrement}> Decrement</button>;
};

const App = () => (
  <Fragment>
    <SayHello />
    <ShowResult />
    <IncrementCounter />
    <DecrementCounter />
  </Fragment>
);

export default App;
