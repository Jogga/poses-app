import React, { useEffect, useState } from 'react'
import { StyledTimer } from './style'

function Timer(props) {
  const [timeLeft, setTimeLeft] = useState(props.duration);

  useEffect(() => {
    if (timeLeft === 0 || props.paused) return;
    const timer = setTimeout(() => {
      setTimeLeft(timeLeft - 1);
      props.onTick(timeLeft - 1);
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