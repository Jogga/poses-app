import React, { useState } from 'react'
import { gql } from 'apollo-boost'
import { useQuery } from '@apollo/react-hooks'
import { AppContainer } from './style'
import PoseViewer from '../PoseViewer'

// const POSE = gql`
//   query Pose($index: Int!) {
//     pose(index: $index) {
//       url
//     }
//     poseCount
//   }
// `;
// const { loading, error, data } = useQuery(POSE, { variables: { index: pose }});

const POSES = gql`
  query Poses {
    poses {
      url
      orientation
    }
  }
`

function App() {
  const [poseDuration, setPoseDuration] = useState(60000);
  const [prepDuration, setPrepDuration] = useState(5000);
  const [startPose, setStartPose] = useState(0);


  const { loading, error, data } = useQuery(POSES);
  if (error) return <p>{ error.message }</p>;
  if (loading) return <p>Loading</p>;


  const updateSetup = (currentPose, updatedPoseDur, updatedPrepDur) => {
    setPoseDuration(updatedPoseDur);
    setPrepDuration(updatedPrepDur);
    setStartPose(currentPose);
  } 

  return (
    <AppContainer>
      <PoseViewer 
        poses={ data.poses } 
        startPose={startPose}
        poseDuration={poseDuration} 
        prepDuration={prepDuration}
        updateSetup={updateSetup} />
    </AppContainer>
  )
}

export default App