import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

class Signin extends Component {
  constructor(props) {
    super(props)
    this.state = {
      user: {
        email: '',
        password: ''
      },
      errors: []
    }
  }

  email(e) {
    this.setState({ user: Object.assign(this.state.user, { email: e.target.value }) })
  }

  password(e) {
    this.setState({ user: Object.assign(this.state.user, { password: e.target.value }) })
  }

  signin() {
    this.setState({ errors: [] }, () => {
      if (this.state.user.email !== 'demo@demo.com' || this.state.user.password !== 'password') {
        this.setState({ errors: ['Login failed.'] })
        return
      }
      this.props.dispatch({
        type: 'SET_USER',
        payload: { email: this.state.user.email }
      })
    })
  }

  render() {
    if (this.props.user.email) return <Redirect to="/profile" />
    return (
      <div>
        <h1>Sign in</h1>
        <form method="post">
          <input placeholder="Email" onChange={e => this.email(e)} value={this.state.user.email} type="text" autoFocus />
          <input placeholder="Password" onChange={e => this.password(e)} value={this.state.user.password} type="password" />
          <button type="button" onClick={() => this.signin()}>
            Sign in
          </button>
          {this.state.errors.length > 0 && (
            <div className="errors">
              {this.state.errors.map((e, ind) => (
                <p className="error" key={ind}>
                  {e}
                </p>
              ))}
            </div>
          )}
        </form>
      </div>
    )
  }
}

Signin.propTypes = {
  classes: PropTypes.object.isRequired
}

const mapStateToProps = state => state

export default connect(mapStateToProps)(Signin)
