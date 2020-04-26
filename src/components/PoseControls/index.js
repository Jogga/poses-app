import React from 'react'
import { BackButton, NextButton, PlayPauseButton, Container, Centered } from './style'
import { ReactComponent as ArrowLeft } from '../Icons/left.svg'
import { ReactComponent as ArrowRight } from '../Icons/right.svg'

function PoseControls(props) {
  return(
    <Container visible={props.visible}>
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