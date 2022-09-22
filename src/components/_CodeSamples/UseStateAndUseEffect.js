import React, { useEffect, useState } from "react";

const UseStateAndUseEffect = () => {
  const [isClicked, setIsClicked] = useState(false);

  useEffect(() => {
    console.log("isClicked", isClicked);
  }, [isClicked]);

  return (
    <div id="useRef-section" className="cover">
      <button
        onClick={() => {
          setIsClicked(true);
        }}
      >
        Set to Clicked
      </button>
      <p>{isClicked ? "I've been clicked" : "I haven't been clicked"}</p>
    </div>
  );
};

export default UseStateAndUseEffect;
