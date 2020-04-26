import React, { useEffect, useState } from 'react'
import { StyledTimer, Colon } from './style'

function Timer({ time }) {

  const hours = alf(time, 3600000); //timeInSeconds - (timeInSeconds % 3600) / 3600;
  const minutes = alf(time - hours * 3600000, 60000);
  const seconds = alf(time - hours * 3600000 - minutes * 60000, 1000);
  return(
    <StyledTimer>
      {hours > 0 &&
        <>
          <span>
            {hours > 9
              ? hours
              : '0'+hours
            }
          </span>
          <Colon>:</Colon>
        </>
      }
      {minutes > 0 &&
        <>
          <span>
            {minutes > 9
              ? minutes
              : '0'+minutes
            }
          </span>
          <Colon>:</Colon>
        </>
      }
      <span>
        {seconds > 9
          ? seconds
          : '0'+seconds
        }
      </span>
    </StyledTimer>
  );
}

export default Timer;

function alf(time, division) {
  return (time - (time % division)) / division;
}