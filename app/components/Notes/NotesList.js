import React from 'react';

const NoteList = ({notes}) => {
  return (
   <ul className="list-group">
    { notes.map((note, index) => (
      <li className="list-group-item" key={index}>{note['.value']}</li>)) 
    };
   </ul>
  )
}

export default NoteList;