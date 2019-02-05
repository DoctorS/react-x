import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

class Profile extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    if (!this.props.user.email) return <Redirect to="/signin" />
    return (
      <div className="Profile">
        <h1>Profile</h1>
        <h2 className="email">{this.props.user.email}</h2>
      </div>
    )
  }
}

const mapStateToProps = state => state

export default connect(mapStateToProps)(Profile)
