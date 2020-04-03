import React, { Component } from 'react'
import { gql } from 'apollo-boost'
import { Query } from 'react-apollo'

class App extends Component {
  render() {
    return (
      <div>
        <div>
          <Query query={IMAGE_QUERY}>
            {props => {
              const { data, loading, error } = props
              if (loading) {
                return <div>Loading</div>
              }

              if (error) {
                return <div>An unexpected error occurred</div>
              }

              return (
                <div>
                  <p>What's your name?</p>
                  <p>{data.pose.url}</p>
                </div>
              )
            }}
          </Query>
        </div>
      </div>
    )
  }
}

const IMAGE_QUERY = gql`
  query getPose($poseId: Int) {
    pose(id: $poseId) {
      url
    }
  }
`

export default App