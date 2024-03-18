import React, { useState } from "react";

const PromiseComponent = () => {
  const [value, setValue] = useState();
  const handleClick = () => {
    setTimeout(() => {
        const result = true;
        const myPromise = new Promise((resolve, reject) => {
          if (result) {
            resolve("login successfully");
          } else {
            reject("failed to login");
          }
        });
        myPromise
          .then((success) => {
            setValue(success);
          })
          .catch((err) => {
            setValue(err);
          });
    }, 2000);

  };
  return (
    <div>
      <h2>{value}</h2>

      <button onClick={handleClick}>click</button>
    </div>
  );
};

export default PromiseComponent;
