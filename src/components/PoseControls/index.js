import React, { useState } from 'react'
import { BackButton, NextButton, PlayPauseButton, Container, Centered } from './style'
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
      timeout = setTimeout(() => setMouseMoving(false), 3000);
    })();
  }

  return(
    <Container onMouseMove={e => setMouseMove(e)} visible={mouseMoving || props.paused}>
      <Centered>
        <BackButton onClick={props.onBack}><ArrowLeft /></BackButton>
          {props.paused
            ? <PlayPauseButton onClick={props.onPlay}>Continue</PlayPauseButton>
            : <PlayPauseButton onClick={props.onPause}>Pause</PlayPauseButton>
          }
        <NextButton onClick={props.onNext}><ArrowRight /></NextButton>
      </Centered>
    </Container>
  );
}

export default PoseControls