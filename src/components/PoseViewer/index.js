import React, { useEffect, useState } from 'react'
import { Image } from './style'
import Timer from '../Timer'
import PoseControls from '../PoseControls'

function PoseViewer(props) {
  const poses = props.poses;
  const [pose, setPose] = useState(0);
  const [paused, setPaused] = useState(false);
  const [duration, setDuration] = useState(props.duration);
  let timeLeft = duration;
  console.log(`render pose ${pose} with duration ${duration} timeleft ${timeLeft}`);

  useEffect(() => {
    console.log(`useEffect ${duration}`);
    if (!paused) {
      const timeout = setTimeout(() => {
        next();
      }, duration * 1000);
      return () => {
        clearTimeout(timeout);
      }
    }
  })

  const next = () => {
    if (pose < poses.length - 1) {
      setPose(pose + 1);
    } else {
      setPose(0);
    }
    setDuration(props.duration);
    console.log('set duration ' + props.duration);
  }
  const back = () => {
    if(pose < 1) {
      setPose(poses.length - 1);
    } else {
      setPose(pose - 1);
    }
    setDuration(props.duration);
  }
  
  const pause = () => {
    setPaused(true);
    console.log('pause ' + timeLeft);
    setDuration(timeLeft);
  }
  
  const play = () => {
    setPaused(false);
    console.log('play ' + timeLeft);
    setDuration(timeLeft);
  }

  const tickTock = (time) => {
    timeLeft = time;
  }

  console.log('render poseviewer');

  return(
    <div>
      <Image src={ poses[pose].url } alt="" />
      <PoseControls 
        onPause={pause} 
        onPlay={play} 
        onNext={next} 
        onBack={back} 
        paused={paused} />
      <Timer 
        duration={duration}
        onTick={tickTock}
        paused={paused} />
    </div>
  )
}

export default PoseViewer;