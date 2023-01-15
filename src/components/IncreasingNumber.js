import React, { useState, useEffect } from 'react';

const IncreasingNumber = ({ intervalTime, lastNumber,afterText }) => {
  const [number, setNumber] = useState(0); // define state variable and its updater function

  useEffect(() => {
    let intervalId;

    if (number < lastNumber) {
      intervalId = setInterval(() => {
        setNumber(number + 1); // update state variable with new value
      }, intervalTime); // increase number by 1 every intervalTime milliseconds
    }

    return () => clearInterval(intervalId); // clear interval when component unmounts
  }, [number, intervalTime, lastNumber]); // only re-run the effect when the number, intervalTime, or lastNumber state variables change

  return (
    <div className='noscroll'>
      <h1>{number} {afterText}</h1>
    </div>
  );
};

export default IncreasingNumber;