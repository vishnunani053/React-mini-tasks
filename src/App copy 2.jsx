// import React, { useEffect, useState } from 'react'

// const App = () => {
//   const [width,setWidth]=useState(window.innerWidth);

//   useEffect(()=>{
//  const handleResize=()=>{
//   setWidth(window.innerWidth);
//  }
//  window.addEventListener('resize',handleResize);
//  return ()=> window.removeEventListener("resize",handleResize);
//   },[]);
//   return width;

//   function windowWidthComponent(){
// const width =App();
//   }
//   return (
//     <div>
//     <h1>window width:{width}</h1>
//     </div>
//   )
// }

// export default App


import React, { useState,useEffect } from 'react'

function useWindowWidth(){
    const [width,setWidth]=useState(window.innerWidth);

  useEffect(()=>{
 const handleResize=()=>{
  setWidth(window.innerWidth);
 }
 window.addEventListener('resize',handleResize);
 return ()=> window.removeEventListener("resize",handleResize);
  },[]);
  return width;
}

const App = () => {
const width =useWindowWidth();
  return (
    <div>
      <h1>window width : {width}</h1>
    </div>
  )
}

export default App


// Vasundhara Gajbhiye
// 11:22
// 1.get the data from below url
//  https://jsonplaceholder.typicode.com/users 
// 2. Display a table with basic data from this api
// 3. Add a input to search ID and apply debouncing here.
// 4.Add a reset button which will reset the data in table to initial data.
// 5. Add delete option in each row which should delete respective row when clicked
// Vasundhara Gajbhiye
// 11:24
// Create a simple RESTful API for managing a list of users. The API should allow the following operations:

// Create a new user
// Retrieve the list of users
// Retrieve a specific user by ID
// Update a user's information
// Delete a user