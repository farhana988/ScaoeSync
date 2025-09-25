import React from 'react';

const OTPInput =  ({ otp, onChange, onKeyDown, inputRefs })  => {
    return (
     <div className="flex justify-between gap-2 mb-6">
      {otp.map((digit, idx) => (
        <input
          key={idx}
          ref={(el) => (inputRefs.current[idx] = el)}
          type="text"
          inputMode="numeric"
          maxLength={1}
          value={digit}
          onChange={(e) => onChange(e.target.value, idx)}
          onKeyDown={(e) => onKeyDown(e, idx)}
          className="w-12 h-12 text-center text-lg border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-600"
        />
      ))}
    </div>
    );
};

export default OTPInput;