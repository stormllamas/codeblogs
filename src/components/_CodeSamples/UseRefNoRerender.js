import React, { useEffect, useRef } from "react";

const UseRefNoRerender = () => {
  const valueRef = useRef(false);

  const handleClick = () => {
    const newValue = valueRef.current + 1;
    console.log("newValue", newValue);
    valueRef.current = newValue;
  };

  useEffect(() => {
    console.log("valueRef", valueRef.current);
  }, [valueRef.current]);

  return (
    <div id="useRef-section" className="cover">
      <p>Welcome to the UseRefNoRerender!</p>
      <button onClick={handleClick}>Clicker</button>
    </div>
  );
};

export default UseRefNoRerender;
