import React from 'react';

export default class AddNote extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.setRef = this.setRef.bind(this);
  }
  setRef(ref) {
    this.note = ref;
  }
  _submitForm() {
    const newNote = this.note.value;
    this.note.value = '';
    this.props.addNote(newNote);
  }
  render() {
    return (
      <div className="input-group">
        <input type="text" className="form-control" placeholder="Add New Note" ref={this.setRef} />
        <span className="input-group-btn">
          <button className="btn btn-default" type="button" onClick={this._submitForm.bind(this)}>Submit</button>
        </span>
      </div>
    )
  }
}

AddNote.propTypes = {
  username: React.PropTypes.string.isRequired,
  addNote: React.PropTypes.func.isRequired
}