import React, { useEffect, useState } from 'react'
import { StyledTimer } from './style'

function Timer(props) {
  const [timeLeft, setTimeLeft] = useState(props.time);

  useEffect(() => {
    if (timeLeft === 0) return;
    const timer = setTimeout(() => {
      setTimeLeft(timeLeft - 1);
    }, 1000);
    return () => clearTimeout(timer);
  })

  return(
    <StyledTimer>
      { timeLeft }
    </StyledTimer>
  );
}

export default Timer;