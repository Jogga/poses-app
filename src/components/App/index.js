import React, { useState, useEffect } from 'react'
import { gql } from 'apollo-boost'
import { useQuery } from '@apollo/react-hooks'
import { Image, AppContainer } from './style'
import Timer from '../Timer'

const POSE = gql`
  query Pose($index: Int!) {
    pose(index: $index) {
      url
    }
    poseCount
  }
`;

function App() {
  const [ pose, setPose ] = useState(0);
  const [ time, setTime ] = useState(20);
  const { loading, error, data } = useQuery(POSE, { variables: { index: pose }});

  useEffect(() => {
    const timer = setTimeout(() => {
      if (pose + 1 < data.poseCount) {
        setPose(pose + 1);
      } else {
        setPose(0);
      }
    }, time * 1000);
    return () => clearTimeout(timer);
  })


  if (error) return <p>{ error.message }</p>;
  if (loading) return <p>Loading</p>;

  return (
    <AppContainer>
      <Image src={data.pose.url} alt="" />
      <div style={{ position: "absolute", color: "white" }}>Pose: { pose + 1 } / { data.poseCount } - Time remaining: <Timer time={ time } /></div>
    </AppContainer>
  )
}

export default App