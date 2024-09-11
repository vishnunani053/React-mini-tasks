import React, { useState } from 'react';

const App = () => {
  const [quantity, setQuantity] = useState(0);
  const [price, setPrice] = useState(0);
  const eachItemPrice = 10; // Replace 10 with the actual price of each item

  const handleAdd = () => {
    setQuantity((prevQuantity) => {
      const newQuantity = prevQuantity + 1;
      setPrice(newQuantity * eachItemPrice); // Update price based on the new quantity
      return newQuantity; // Return the new quantity
    });
  };

  return (
    <div className="mt-5 p-5">
      <h1>Price: {price}</h1>
      <button onClick={handleAdd}>Add to Cart ({quantity})</button>
    </div>
  );
};

export default App;
