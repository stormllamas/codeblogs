import React, { useEffect, useRef, useState } from "react";

const UseRefValuePersistSample = () => {
  const valueRef = useRef(false);
  const [value, setValue] = useState(false);

  const log = () => {
    console.log("-----log-----");
    console.log("value", value);
    console.log("valueRef", valueRef.current);
  };

  useEffect(() => {
    console.log("-----RENDER-----");
    console.log("value", value);
    console.log("valueRef", valueRef.current);
    setValue(true);
    valueRef.current = true;
    log();
  }, []);

  return (
    <div id="useRef-section" className="cover">
      <p>Welcome to the UseRefValuePersistSample!</p>
    </div>
  );
};

export default UseRefValuePersistSample;
