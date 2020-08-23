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
    }
  }
`

function App() {
  const { loading, error, data } = useQuery(POSES);

  if (error) return <p>{ error.message }</p>;
  if (loading) return <p>Loading</p>;

  return (
    <AppContainer>
      <PoseViewer poses={ data.poses } duration={ 61 * 1000 }/>
    </AppContainer>
  )
}

export default App