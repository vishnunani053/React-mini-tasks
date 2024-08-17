// import React, { useCallback, useState } from "react";

// const Child = React.memo(({incrementValue})=>{
// console.log("child is rendered")
// return <button onClick={incrementValue}>click</button>
// })

// const ParentComponent = () => {
//   const [count, setCount] = useState(0);
//   const [text, setText] = useState("");

//   const increment = useCallback(() => {
//     setCount((prevCount) => prevCount + 1);
//   }, []);
//   return (
//     <div>
//       <h2>count:{count}</h2>
//       <Child incrementValue={increment} />
//       <input
//         type="text"
//         value={text}
//         onChange={(e) => setText(e.target.value)}
//         placeholder="write something"
//       />
//     </div>
//   );
// };

// export default ParentComponent;

import React, { useCallback, useState } from "react";
const Child = React.memo(({ incrementValue }) => {
  console.log("child is rendering");
  return <button onClick={incrementValue}> click</button>;
});

const ParentComponent = () => {
  const [count, setCount] = useState(0);
  const increment = useCallback(() => {
    setCount((prevCount) => prevCount + 1);
  }, []);
  return (
    <div>
      <h2>count:{count}</h2>
      <Child incrementValue={increment} />
    </div>
  );
};

export default ParentComponent;
