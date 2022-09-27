import React from "react";
import { connect, Provider } from "react-redux";
import { decrement, increment } from "./actions/counterActions";
import store from "./store";

const mapStateToPropsForHello = (state) => ({
  hello: state.hello,
});

const mapStateToPropsForCounter = (state) => ({
  counter: state.counter,
});

const SayHello = connect(mapStateToPropsForHello)(({ hello: { text } }) => {
  console.log("[SayHello] is running");
  return <h1>{text}</h1>;
});

const ShowResult = connect(mapStateToPropsForCounter)(
  ({ counter: { count } }) => {
    console.log("[ShowResult] is running");
    return <h1>{count}</h1>;
  }
);

const IncrementCounter = connect(null, { increment })(({ increment }) => {
  console.log("[IncrementCounter] is running");
  return <button onClick={increment}> Increment</button>;
});

const DecrementCounter = connect(null, { decrement })(({ decrement }) => {
  console.log("[DecrementCounter] is running");
  return <button onClick={decrement}> Decrement</button>;
});

const App = () => (
  <Provider store={store}>
    <SayHello />
    <ShowResult />
    <IncrementCounter />
    <DecrementCounter />
  </Provider>
);

export default App;
