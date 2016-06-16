import React from 'react';

export default class UserProfiles extends React.Component {
  render() {
    return (
      <div>
      <p> USER PROFILE! </p>
      <p> Username: {this.props.username} </p>
      <p> Bio: {this.props.bio.name} </p>
      </div>
    )
  }
}

UserProfiles.propTypes = {
  username: React.PropTypes.string.isRequired,
  bio: React.PropTypes.object.isRequired
}