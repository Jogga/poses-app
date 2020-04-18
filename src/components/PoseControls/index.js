import React from 'react'
import { BackButton, NextButton, PlayPauseButton, Container } from './style'

function PoseControls(props) {
  return(
    <Container>
      <BackButton onClick={props.onBack}>previous</BackButton>
        {props.paused
          ? <PlayPauseButton onClick={props.onPlay}>play</PlayPauseButton>
          : <PlayPauseButton onClick={props.onPause}>pause</PlayPauseButton>
        }
      <NextButton onClick={props.onNext}>next</NextButton>
    </Container>
  );
}

export default PoseControls