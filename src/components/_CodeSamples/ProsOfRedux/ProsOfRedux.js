import React from "react";
import { connect, Provider } from "react-redux";
import { decrement, increment } from "./actions/counterActions";
import store from "./store";

const mapStateToProps = (state) => ({
  counter: state.counter,
});

const SayHello = connect(mapStateToProps)(({ counter: { hello } }) => {
  console.log("[SayHello] is running");
  return <h1>{hello}</h1>;
});

const ShowResult = connect(mapStateToProps)(({ counter: { count } }) => {
  console.log("[ShowResult] is running");
  return <h1>{count}</h1>;
});

const IncrementCounter = connect(null, { increment })(({ increment }) => {
  console.log("[IncrementCounter] is running");
  return <button onClick={increment}> Increment</button>;
});

const DecrementCounter = connect(null, { decrement })(({ decrement }) => {
  console.log("[DecrementCounter] is running");
  return <button onClick={decrement}> Decrement</button>;
});

const ConsOfContext = () => (
  <Provider store={store}>
    <SayHello />
    <ShowResult />
    <IncrementCounter />
    <DecrementCounter />
  </Provider>
);

export default ConsOfContext;
