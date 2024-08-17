// without dependency array

// import React, { useEffect, useRef, useState } from "react";

// const UseRefHook = () => {
//   const [count, setCount] = useState(0);
//   const renderCount = useRef(0);
//   useEffect(() => {
//     renderCount.current += 1;
//   });

//   const handleClick =()=>{
//     setCount((previous)=>previous+1)
//   }
//   return <div>
//     <h3>render count:{renderCount.current}</h3>
//     <h1>click count:{count}</h1>
//     <button onClick={handleClick}>increment</button>
//   </div>;
// };

// export default UseRefHook;

// with dependency array

import React, { useEffect, useRef, useState } from "react";

const UseRefHook = () => {
  const [count, setCount] = useState(0);
  const referenceCount = useRef(0);
  useEffect(() => {
    referenceCount.current += 1;
  }, []);
  const handleClick = () => {   
    setCount((previous) => previous + 1);
  };
  return (
    <div>
      <h2>render count {referenceCount.current}</h2>
      <h1>count{count}</h1>
      <button onClick={handleClick}>click</button>
    </div>
  );
};

export default UseRefHook;
