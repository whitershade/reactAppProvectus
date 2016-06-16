import React from 'react';
//import firebase from 'firebase';

//let config = {
//  apiKey: 'B6ECZ41bmgxgc7KZvEl6lF9mCQNCoOVH7VgiH9Dr',
//  databaseURL: 'https://reactprovectusapp.firebaseio.com/'
//}
//
//firebase.initializeApp(config);

export default class Main extends React.Component {
  render() {
    return (
    <div className="main-container">
      <nav className="navbar navbar-default" role="navigation">
        <div className="col-sm-7 col-sm-offset-2" style={{marginTop: 15}}>
          MENU
        </div>
      </nav>
      <div className="container">
        {this.props.children}
      </div>
    </div>
  )
  }
}