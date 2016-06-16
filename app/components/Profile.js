import React from 'react';
import Router from 'react-router';
import Repos from './Github/Repos';
import UserProfile from './Github/UserProfile';
import Notes from './Notes/Notes';
import Firebase from 'firebase';
import ReactMixin from 'react-mixin';
import ReactFireMixin from 'reactfire';

export default class Profile extends React.Component {
  constructor() {
    super();
    this.state = {
      notes: [1, 2, 3],
      bio: {
        name: "WhiterShade"
      },
      repos: ['a', 'b', 'c']
    }
    this._handleAddNote = this._handleAddNote.bind(this);
  }
  componentDidMount() {
    this.ref = new Firebase('https://github-note-taker.firebaseio.com/');
    let childRef = this.ref.child(this.props.params.username);
    this.bindAsArray(childRef, 'notes');
  }
  
  componentWillUnmount() {
    this.unbind('notes');
  }
  
  _handleAddNote(newNote) {
    this.ref.child(this.props.params.username).child(this.state.notes.length).set(newNote);
  }
  
  render() {
    return (
      <div className="row">
        <div className="col-md-4">
         <UserProfile username={this.props.params.username} bio={this.state.bio} />
        </div>
        <div className="col-md-4">
         <Repos username={this.props.params.username} repos={this.state.repos} />
        </div>
        <div className="col-md-4">
         <Notes 
           username={this.props.params.username} 
           notes={this.state.notes} 
           addNote = {this._handleAddNote} />
        </div>
      </div>
    )
  }
}

ReactMixin(Profile.prototype, ReactFireMixin);