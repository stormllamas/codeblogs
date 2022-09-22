import React, { useEffect, useRef, useState } from "react";

const UseRefValuePersist = () => {
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
  }, []); // eslint-disable-line

  return (
    <div id="useRef-section" className="cover">
      <p>Welcome to the UseRefValuePersistSample!</p>
    </div>
  );
};

export default UseRefValuePersist;
