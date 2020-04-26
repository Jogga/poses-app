import React, { useEffect, useReducer } from 'react'
import { Image, Stage } from './style'
import Timer from '../Timer'
import PoseControls from '../PoseControls'

function reducer(state, action) {
  switch (action.type) {
    case 'pause':
      return { 
        timeLeft: state.timeLeft, 
        pose: state.pose,
        paused: true,
      };
    case 'play':
      return {
        timeLeft: state.timeLeft,
        pose: state.pose,
        paused: false,
      };
    case 'secondPassed':
      return {
        timeLeft: state.timeLeft - 1000,
        pose: state.pose,
        paused: state.paused,
      };
    case 'switchPose':
      return {
        timeLeft: action.duration,
        pose: action.pose,
        paused: state.paused,
      }
  }
}

function PoseViewer(props) {
  const[state, dispatch] = useReducer(
    reducer, 
    {
      timeLeft: props.duration,
      pose: 0,
      paused: false,
    });

  useEffect(() => {
    if (state.timeLeft <= 0) {
      dispatch({ 
        type: 'switchPose', 
        pose: iteratePose(state.pose, 1), 
        duration: props.duration});
      return;
    }
    if (!state.paused) {
      const timeout = setTimeout(() => {
        dispatch({ type: 'secondPassed' });
      }, 1000);
      return () => {
        clearTimeout(timeout);
      }
    }
  })

  function iteratePose(current, delta) {
    if(current + delta > props.poses.length - 1) {
      return 0;
    } else if (current + delta < 0) {
      return props.poses.length - 1;
    } else {
      return current + delta;
    }
  }

  const next = () => {
    dispatch({ 
      type: 'switchPose', 
      pose: iteratePose(state.pose, 1), 
      duration: props.duration});
  }
  const back = () => {
    dispatch({ 
      type: 'switchPose', 
      pose: iteratePose(state.pose, -1), 
      duration: props.duration});
  }
  
  const pause = () => {
    dispatch({ type: 'pause' });
  }
  
  const play = () => {
    dispatch({ type: 'play' });
  }

  console.log(props.displayControls);

  return(
    <Stage>
      <Image src={ props.poses[state.pose].url } alt="" />
      <PoseControls 
        visible={props.displayControls || state.paused}
        onPause={pause} 
        onPlay={play} 
        onNext={next} 
        onBack={back} 
        paused={state.paused} />
      <Timer 
        time={state.timeLeft} />
    </Stage>
  )
}

export default PoseViewer;