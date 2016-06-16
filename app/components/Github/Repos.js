import React from 'react';

export default class Repos extends React.Component {
  render() {
    return (
      <div>
        <p>REPOSS</p>
        REPOS: {this.props.repos}
      </div>
    )
  }
}