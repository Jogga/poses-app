import React, { useEffect, useState } from 'react'
import { StyledTimer } from './style'

function Timer({children}) {
  return(
    <StyledTimer>
      { children }
    </StyledTimer>
  );
}

export default Timer;