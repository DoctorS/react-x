import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import validator from 'validator'
import { setUser } from '../actions'

class Signup extends Component {
  constructor(props) {
    super(props)
    this.state = {
      user: {
        email: '',
        password: '',
        confirmPassword: ''
      },
      errors: []
    }
  }

  signup() {
    this.setState({ errors: [] }, () => {
      let errors = []
      if (!validator.isEmail(this.state.user.email)) errors.push('Invalid email address.')
      if (this.state.user.password !== this.state.user.confirmPassword) errors.push('Password and password confirmation are not equal.')
      if (this.state.user.password.length < 6) errors.push('Password less than 6 characters.')

      if (errors.length) {
        this.setState({ errors })
        return
      }
      this.props.setUser(this.state.user.email)
    })
  }

  email(e) {
    this.setState({ user: Object.assign(this.state.user, { email: e.target.value }) })
  }

  password(e) {
    this.setState({ user: Object.assign(this.state.user, { password: e.target.value }) })
  }

  confirmPassword(e) {
    this.setState({ user: Object.assign(this.state.user, { confirmPassword: e.target.value }) })
  }

  render() {
    if (this.props.user.email) return <Redirect to="/profile" />
    return (
      <div>
        <h1>Sign up</h1>
        <form method="post">
          <input placeholder="Email" onChange={e => this.email(e)} value={this.state.user.email} autoFocus type="text" />
          <input placeholder="Password" onChange={e => this.password(e)} value={this.state.user.password} type="password" />
          <input placeholder="Confirm password" onChange={e => this.confirmPassword(e)} value={this.state.user.confirmPassword} type="password" />
          <button type="button" onClick={() => this.signup()}>
            Sign up
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

const mapStateToProps = state => state

const mapDispatchToProps = { setUser }

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Signup)
