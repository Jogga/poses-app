import React, { useState } from 'react'
import { BackButton, NextButton, PlayPauseButton, Container, Controls, Center } from './style'
import { ReactComponent as ArrowLeft } from '../Icons/left.svg'
import { ReactComponent as ArrowRight } from '../Icons/right.svg'

function PoseControls(props) {
  const [mouseMoving, setMouseMoving] = useState(false);

  function setMouseMove(e) {
    e.preventDefault();
    if (mouseMoving) return;
    setMouseMoving(true);
    let timeout;
    (() => {
      clearTimeout(timeout);
      timeout = setTimeout(() => setMouseMoving(false), 1000);
    })();
  }

  // TODO: On clicking continue, the controls should immediately fade out
  // Ideally there is a short timer after "continue" so the controls don’t reappear after minimal
  // Mouse movements.
  // Also, Move visibility on hover from style.js to this file
  return(
    <Container onMouseMove={e => setMouseMove(e)}>
      <Center>
        <Controls visible={mouseMoving || props.paused}>
          <BackButton onClick={props.onBack}><ArrowLeft /></BackButton>
            {props.paused
              ? <PlayPauseButton onClick={props.onPlay}>Continue</PlayPauseButton>
              : <PlayPauseButton onClick={props.onPause}>Pause</PlayPauseButton>
            }
          <NextButton onClick={props.onNext}><ArrowRight /></NextButton>
        </Controls>
      </Center>
    </Container>
  );
}

export default PoseControls