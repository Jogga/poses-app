import React from 'react'
import { BackButton, NextButton, PlayPauseButton, Container } from './style'

function PoseControls(props) {
  return(
    <Container>
      <BackButton onClick={props.onBackClick}>previous</BackButton>
        {props.playing
          ? <PlayPauseButton onClick={props.onPauseClick}>pause</PlayPauseButton>
          : <PlayPauseButton onClick={props.onPlayClick}>play</PlayPauseButton>
        }
      <NextButton onClick={props.onNextClick}>next</NextButton>
    </Container>
  );
}

export default PoseControls