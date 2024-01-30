import React, { useState } from 'react';

const OTPGenerator = () => {
  const [otp, setOTP] = useState('');

  const generateOTP = () => {
    // Generate a random 6-digit number
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
