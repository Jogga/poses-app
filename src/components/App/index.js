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
  const [mouseMoving, setMouseMoving] = useState(false);

  function setMouseMove(e) {
    e.preventDefault();
    if (mouseMoving) return;
    setMouseMoving(true);
    let timeout;
    (() => {
      clearTimeout(timeout);
      timeout = setTimeout(() => setMouseMoving(false), 3000);
    })();
  }

  if (error) return <p>{ error.message }</p>;
  if (loading) return <p>Loading</p>;

  return (
    <AppContainer onMouseMove={e => setMouseMove(e)}>
      <PoseViewer poses={ data.poses } duration={ 120 * 1000 } displayControls={ mouseMoving } />
    </AppContainer>
  )
}

export default App