import React from 'react'
import PropTypes from 'prop-types'
import Router from './Router'
import Navigation from './Navigation'
import { Link, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <main>
        <header>
          <Navigation />
          {/*<Link to="/">*/}
          {/*React App*/}
          {/*</Link>*/}

          {/*{!this.props.user.email && (*/}
          {/*<Link to="/signin">*/}
          {/*Login*/}
          {/*</Link>*/}
          {/*)}*/}
          {/*{this.props.user.email && (*/}
          {/*<Link to="/profile">*/}
          {/*{this.props.user.email}*/}
          {/*</Link>*/}
          {/*)}*/}
        </header>
        <Router />
      </main>
    )
  }
}

App.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired
}

const mapStateToProps = state => state

export default withRouter(connect(mapStateToProps)(App))
