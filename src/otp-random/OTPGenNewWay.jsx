import React, { useState } from 'react';
import { randomInt } from 'crypto';


const OTPGenNewWay = () => {
    const [otp, setOtp] = useState('');

    const generateOTP = () => {
        const newOTP = randomInt(10000, 99999); // Generating a 5-digit OTP
        setOtp(newOTP.toString()); // Converting to string before setting state
    };

    return (
        <div>
            <h3>{otp}</h3>
            <button onClick={generateOTP}>Generate OTP</button>
        </div>
    );
};

export default OTPGenNewWay;
