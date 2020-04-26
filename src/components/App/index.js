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

const POSES = gql`
  query Poses {
    poses {
      url
    }
  }
`

function App() {
  const { loading, error, data } = useQuery(POSES);
  // const { loading, error, data } = useQuery(POSE, { variables: { index: pose }});

  if (error) return <p>{ error.message }</p>;
  if (loading) return <p>Loading</p>;
  console.log('render app');

  return (
    <AppContainer>
      <PoseViewer poses={ data.poses } duration={ 120 * 1000 } />
    </AppContainer>
  )
}

export default App