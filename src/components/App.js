import React from 'react'
import Router from './Router'
import Navigation from './Navigation'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <React.Fragment>
        <header>
          <Navigation />
        </header>
        <main>
          <Router />
        </main>
      </React.Fragment>
    )
  }
}

const mapStateToProps = state => state

export default withRouter(connect(mapStateToProps)(App))
