import React from 'react'
import { StyledTimer, Colon } from './style'

function Timer({ time, duration }) {
  const initial = breakdownTimeString(duration);
  const current = breakdownTimeString(time);

  const hoursDigits = initial.hours > 0;
  const minutesDigits = initial.minutes > 0 || hoursDigits;
  const secondsDigits = true;

  console.log(hoursDigits+' '+minutesDigits+' '+secondsDigits);
  return(
    <StyledTimer>
      {hoursDigits &&
        <>
          <span>{makeUnitDigits(current.hours)}</span>
          <Colon>:</Colon>
        </>
      }
      {minutesDigits &&
        <>
          <span>{makeUnitDigits(current.minutes)}</span>
          <Colon>:</Colon>
        </>
      }
      {secondsDigits &&
        <>
          <span>{makeUnitDigits(current.seconds)}</span>
        </>
      }
    </StyledTimer>
  );
}

export default Timer;

function removeIncompleteUnits(time, division) {
  return (time - (time % division)) / division;
}

function breakdownTimeString(time) {
  let durationObject = {};
  durationObject.hours = removeIncompleteUnits(time, 3600000);
  durationObject.minutes = removeIncompleteUnits(time - durationObject.hours * 3600000, 60000);
  durationObject.seconds = removeIncompleteUnits(time - durationObject.hours * 3600000 - durationObject.minutes * 60000, 1000);
  return durationObject;
}

function makeUnitDigits(n) {
  if(n > 9) {
    return n;
  } else if (n > 0) {
    return '0' + n;
  } else {
    return '00';
  }
}