import React from 'react';

export default class NotesList extends React.Component {
  render() {
    { notes } = this.props;
    return (
     <ul className="list-group">
      {this.props.notes.map((note, index) => {
        return <li className="list-group-item" key={index}>{note['.value']}</li>
      })};
     </ul>
    )
  }
}