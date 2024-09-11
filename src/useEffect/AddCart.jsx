//

import React, { useEffect, useState } from "react";

const AddCart = () => {
  const [price, setPrice] = useState(0);
  const [quantity, setQuantity] = useState(0);
  const eachItemcost = 100;

  //     const handleAdd =()=>{
  // setQuantity((prevQuantity)=>{
  //     const newQuantity = prevQuantity + 1;
  //     setPrice(newQuantity*eachItemcost);
  //     return newQuantity;
  // })
  // }

  // const handleAdd =()=>{
  //     setQuantity(()=>{
  //         const newQuantity = quantity +1;
  //         setPrice(newQuantity * eachItemcost);
  //         return newQuantity
  //     })
  // }

  useEffect(() => {
    setPrice(quantity * eachItemcost);
  }, [quantity]);

  const handleAdd = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };
  return (
    <div className="m-5">
      <h1>price : {price}</h1>
      <button onClick={handleAdd}>Add Cart ({quantity})</button>
    </div>
  );
};

export default AddCart;
