import React, { useEffect, useState } from "react";

const SetIntervalCounter = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prevCount) => prevCount + 1);
    }, 3000);
    return () => clearInterval(interval);
  }, []);
  return (
    <div>
      <h1>count: {count}</h1>
    </div>
  );
};

export default SetIntervalCounter;
