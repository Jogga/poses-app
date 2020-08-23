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
      timeout = setTimeout(() => setMouseMoving(false), 1500);
    })();
  }
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