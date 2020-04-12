import React from 'react'
import { gql } from 'apollo-boost'
import { useQuery } from '@apollo/react-hooks'
import { Image, ImageContainer } from './style'

const POSE = gql`
  query currentPose {
    pose {
      url
    }
  }
`;

function App() {
  const { loading, error, data } = useQuery(POSE);

  if (error) return <p>{ error.message }</p>;
  if (loading) return <p>Loading</p>;

  return (
    <ImageContainer>
      <Image src={data.pose.url} alt="" />
    </ImageContainer>
  )
}

export default App