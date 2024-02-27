// 6-digit otp

import React, { useState } from 'react';

const OTPGenerator = () => {
  const [otp, setOTP] = useState('');

  const generateOTP = () => {
    //Generate a random 6-digit number
    const randomOTP = Math.floor(100000 + Math.random() * 900000);
    setOTP(randomOTP.toString());
  };

  return (
    <div>
      <h1>Your OTP: {otp}</h1>
      <button onClick={generateOTP}>Generate OTP</button>
    </div>
  );
};

export default OTPGenerator;


//four digit otp

// import React, { useState } from 'react'

// const OtpGenerator = () => {
//   const [otp,setOTP]=useState()
 
//   const generateOTP=()=>{
//     const randomOTP = Math.floor(1000+Math.random()*9000)
//     setOTP(randomOTP.toString())
//   }
//   return (
//     <div>
//     <h1>Your OTP: {otp}</h1>
//     <button onClick={generateOTP}>Generate OTP</button>
//   </div>
//   )
// }

// export default OtpGenerator


// import React, { useState } from 'react'

// const OTPGenerator = () => {
//   const [otp,setOtp]=useState('')
//   const generateOTP =()=>{
//     const randomOTP = Math.floor(100000+Math.random()*900000)
//     setOtp(randomOTP)
//     console.log(randomOTP)
//   }
//   return (
//     <div>
//       <h1>{otp}</h1>
//       <button onClick={generateOTP}>create otp</button>
//     </div>
//   )
// }

// export default OTPGenerator