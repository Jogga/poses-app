import React, { useState, useEffect } from 'react'
import { gql } from 'apollo-boost'
import { useQuery } from '@apollo/react-hooks'
import { Image, AppContainer } from './style'
import Timer from '../Timer'
import PoseControls from '../PoseControls'
import PoseViewer from '../PoseViewer'

const POSE = gql`
  query Pose($index: Int!) {
    pose(index: $index) {
      url
    }
    poseCount
  }
`;

function App() {
  const initialTime = 6;
  const [ pose, setPose ] = useState(0);
  const [ time, setTime ] = useState(initialTime);
  const [ playing, setPlaying ] = useState(true);
  const { loading, error, data } = useQuery(POSE, { variables: { index: pose }});

  if (error) return <p>{ error.message }</p>;
  if (loading) return <p>Loading</p>;

  const onBack = () => {
    if (pose > 0) {
      setPose(pose - 1);
    } else {
      setPose(data.poseCount - 1);
    }
    setTime(initialTime);
  }
  const onNext = () => {
    if (pose < data.poseCount - 1) {
      setPose(pose + 1);
    } else {
      setPose(0);
    }
    setTime(initialTime);
  }
  const onPause = () => {
    setPlaying(false);
    console.log('pause');
  }
  const onPlay = () => {
    setPlaying(true);
    console.log('play');
  }

  return (
    <AppContainer>
      <PoseViewer 
        url={ data.pose.url } 
        time={ time } 
        onTimeUp={ onNext } />
      <div style={{ position: "absolute", color: 'white' }}>Pose: { pose + 1 } / { data.poseCount }</div>
      <PoseControls 
        onBackClick={onBack} 
        onNextClick={onNext} 
        onPauseClick={onPause} 
        onPlayClick={onPlay} 
        playing={playing} />  
    </AppContainer>
  )
}

export default App