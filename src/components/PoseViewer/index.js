import React, { useEffect, useReducer } from 'react'
import { Image, Stage, Pose, Curtain, TimerControl, TimerButton } from './style'
import Timer from '../Timer'
import TimerSetupPopOver from '../TimerSetupPopOver'
import PoseControls from '../PoseControls'

function reducer(state, action) {
  switch (action.type) {
    case 'pause':
      return { 
        timeLeft: state.timeLeft, 
        pose: state.pose,
        paused: true,
        revealed: state.revealed,
        setupVisible: state.setupVisible,
      };
    case 'play':
      return {
        timeLeft: state.timeLeft,
        pose: state.pose,
        paused: false,
        revealed: state.revealed,
        setupVisible: state.setupVisible,
      };
    case 'toggleSetup':
      return {
        timeLeft: state.timeLeft,
        pose: state.pose,
        paused: state.paused,
        revealed: state.revealed,
        setupVisible: action.setupVisible,
      };
    case 'revealPose':
      return {
        timeLeft: state.timeLeft,
        pose: state.pose,
        paused: state.paused,
        revealed: true,
        setupVisible: state.setupVisible,
      }
    case 'secondPassed':
      return {
        timeLeft: state.timeLeft - 1000,
        pose: state.pose,
        paused: state.paused,
        revealed: state.revealed,
        setupVisible: state.setupVisible,
      };
    case 'switchPose':
      return {
        timeLeft: action.duration,
        pose: action.pose,
        paused: state.paused,
        revealed: action.revealed,
        setupVisible: state.setupVisible,
      }
    case 'setTimeLeft':
      return {
        timeLeft: action.duration,
        pose: state.pose,
        pause: state.paused,
        revealed: action.revealed,
        setupVisible: state.setupVisible,
      }
  }
}

function PoseViewer(props) {
  const[state, dispatch] = useReducer(
    reducer, 
    {
      timeLeft: props.poseDuration + props.prepDuration,
      pose: props.startPose,
      paused: false,
      revealed: props.prepDuration <= 0,
      setupVisible: false,
    });

  useEffect(() => {
    if (!state.revealed && state.timeLeft <= props.poseDuration) {
      dispatch({ type: 'revealPose' });
    }
    if (state.timeLeft <= -1) {
      dispatch({ 
        type: 'switchPose', 
        pose: iteratePose(state.pose, 1), 
        duration: props.poseDuration + props.prepDuration,
        revealed: props.prepDuration <= 0,
      });
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
      duration: props.poseDuration,
      revealed: true
    });
  }
  const back = () => {
    dispatch({ 
      type: 'switchPose', 
      pose: iteratePose(state.pose, -1), 
      duration: props.poseDuration,
      revealed: true
    });
  }
  
  const pause = () => {
    dispatch({ type: 'pause' });
  }
  
  const play = () => {
    dispatch({ type: 'play' });
  }

  const toggleSetup = () => {
    dispatch({ 
      type: 'toggleSetup',
      setupVisible: !state.setupVisible
    });
  }

  const cancelSetup = () => {
    dispatch({
      type: 'toggleSetup',
      setupVisible: false,
    })
  }

  const applySetup = (x, y) => {
    // console.log(x + ' ' + y);

    // props.updateSetup(state.pose, x, y);
    dispatch({
      type: 'setTimeLeft',
      duration: x = y,
      revealed: y > 0,
    })
  }
  
  return(
    <Stage>
      <Pose visible={state.revealed && state.timeLeft > 0}>
        <Image src={ props.poses[state.pose].url } alt="" />
        <PoseControls
          onPause={pause} 
          onPlay={play} 
          onNext={next} 
          onBack={back} 
          paused={state.paused} />
      </Pose>
      {!state.revealed &&
        <Curtain>
            <p>{props.poses[state.pose].orientation}</p>
        </Curtain>
      }
      <TimerControl>
        <TimerButton onClick={toggleSetup} setupVisible={state.setupVisible}>
          <Timer 
            time={!state.revealed ? state.timeLeft - props.poseDuration : state.timeLeft} 
            duration={!state.revealed ? props.prepDuration : props.poseDuration} />
        </TimerButton>
        {state.setupVisible &&
          <TimerSetupPopOver 
            duration={props.poseDuration} 
            preparationTime={props.prepDuration}
            onCancel={cancelSetup}
            onApply={applySetup}
            />
        }
      </TimerControl>
    </Stage>
  )
}

export default PoseViewer;