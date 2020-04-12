import React from 'react'
import { render } from 'react-dom'
import { ApolloProvider } from 'react-apollo'
import ApolloClient from 'apollo-boost'
import Pose from './components/App/'
import GlobalStyles from './components/GlobalStyles'


const client = new ApolloClient({
  uri: 'http://localhost:4000/',
})

const App = () => (
  <>
    <GlobalStyles />
    <ApolloProvider client={ client }>
      <Pose />
    </ApolloProvider>
  </>
);

render(<App />, document.getElementById('root'));