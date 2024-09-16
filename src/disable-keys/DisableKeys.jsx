// import React, { useEffect } from "react";

// const DisableKeys = () => {
//   const disableKeys = ["c", "C", "x", "J", "u", "I"];

//   const showAlert = (e) => {
//     if ((e.ctrlKey || e.metaKey) && disableKeys.includes(e.key)) {
//       e.preventDefault();
//       alert("You cannot use this key combination.");
//     }
//   };

//   useEffect(() => {
//     window.addEventListener("keydown", showAlert);

//     // Cleanup event listener on component unmount
//     return () => {
//       window.removeEventListener("keydown", showAlert);
//     };
//   }, []);

//   return <div>
//     Press Ctrl+C, Ctrl+X, etc. to test the alert.

//     <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor id dolorem voluptatum labore, veniam perferendis facere delectus reiciendis aperiam nostrum, asperiores modi eius sed sunt earum, consequatur provident laboriosam atque?</h1>
//     </div>;
// };

// export default DisableKeys;

import React, { useEffect } from "react";

const DisableKeys = () => {
  const disableKeys = ["c", "C", "x", "J", "u", "I"];

  const showAlert = (e) => {
    if ((e.metaKey || e.ctrlKey) && disableKeys.includes(e.key)) {
      e.preventDefault();
      alert("u cannot use these keys...");
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", showAlert);
    return () => {
      window.removeEventListener("keydown", showAlert);
    };
  }, []);
  return <div>
    Lorem ipsum dolor sit amet.
  </div>;
};

export default DisableKeys;
