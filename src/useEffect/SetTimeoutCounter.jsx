
import React, { useEffect, useState } from 'react'

const SetTimeoutCounter = () => {
    const [visible,setVisible]=useState(true)
    const [count,setCount]=useState(5)
    useEffect(()=>{
     const timer = setTimeout(()=>{
setVisible(false)
     },5000)
     console.log(timer)
     const counter = setInterval(()=>{
         setCount(prevCount=>prevCount-1)
         
        },1000)
        console.log(counter)
    },[])
  return (
    <div>
        <h4>{visible && `it will disappear in ${count} seconds`}</h4>
        <h1>{count===0?"hello good morning":""}</h1>
    
    </div>
    
  )
}

export default SetTimeoutCounter

// import React, { useState } from "react";

// const SetTimeoutCounter = () => {
//   const [formData, setFormData] = useState({
//     userName: "",
//     password: "",
//   });
//   const [submitted, setSubmitted] = useState(false);
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSubmit = () => {
//     if (formData.userName === "vishnu" && formData.password === "123") {
//       setSubmitted(true);
//       alert("login Successfull");
//     } else {
//       alert("enter correct values");
//     }
//   };
//   return (
//     <div>
//       <>
//         {submitted ? (
//           "welcome to my world"
//         ) : (
//           <form onSubmit={handleSubmit}>
//             <input
//               type="text"
//               onChange={handleChange}
//               value={formData.userName}
//               name="userName"
//             />
//             <input
//               type="text"
//               onChange={handleChange}
//               value={formData.password}
//               name="password"
//             />
//             <button type="submit">login</button>
//           </form>
//         )}
//       </>
//     </div>
//   );
// };

// export default SetTimeoutCounter;
