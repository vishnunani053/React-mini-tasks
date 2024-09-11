import React, { useEffect, useRef, useState } from "react";

const UseRefHook = () => {
  const [count, setCount] = useState(0);
  const referenceCount = useRef(10);
  useEffect(() => {
    referenceCount.current += 1;
  }, []);
  const handleClick = () => {
    setCount((previousCount) => previousCount + 1);
  };
  return (
    <div>
      <h3>reference count : {referenceCount.current}</h3>
      <h3> count : {count}</h3>
      <button onClick={handleClick}>count</button>
    </div>
  );
};

export default UseRefHook;
