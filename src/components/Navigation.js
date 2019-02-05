import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { setUser } from '../actions'

class Navigation extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  logout(e) {
    e.preventDefault()
    this.props.setUser('')
  }

  render() {
    return (
      <nav className="Navigation">
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          {!this.props.user.email && (
            <Fragment>
              <li>
                <NavLink to="/signin">Sign in</NavLink>
              </li>
              <li>
                <NavLink to="/signup">Sign up</NavLink>
              </li>
            </Fragment>
          )}
          {this.props.user.email && (
            <Fragment>
              <li>
                <NavLink to="/profile">Profile</NavLink>
              </li>
              <li>
                <NavLink to="/logout" onClick={e => this.logout(e)}>
                  Logout
                </NavLink>
              </li>
            </Fragment>
          )}
        </ul>
      </nav>
    )
  }
}

const mapStateToProps = state => state

const mapDispatchToProps = { setUser }

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Navigation)
