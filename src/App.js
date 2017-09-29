import React, { Component } from 'react';
import { Note } from './Note';
import { NoteEditor } from './NoteEditor';
import { NotesGrid } from './NotesGrid';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
        notes: [
          {
            id: 1,
            color: "green",
            text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus explicabo ipsa, numquam sed dolorem rem est molestias deleniti. Iure ab omnis reiciendis sit quidem, numquam consectetur delectus, molestiae commodi quas?"
          },
          {
            id: 2,
            color: "orange",
            text: "Lorem2 ipsum dolor sit amet, consectetur adipisicing elit. Ducimus explicabo ipsa, numquam sed dolorem rem est molestias deleniti. Iure ab omnis reiciendis sit quidem, numquam consectetur delectus, molestiae commodi quas?"
          },
          {
            id: 3,
            color: "orange",
            text: "Lorem3 ipsum dolor sit amet, consectetur adipisicing elit. Ducimus explicabo ipsa, numquam sed dolorem rem est molestias deleniti. Iure ab omnis reiciendis sit quidem, numquam consectetur delectus, molestiae commodi quas?"
          },
          {
            id: 4,
            color: "yelow",
            text: "Lorem4ipsum dolor sit amet, consectetur adipisicing elit. Ducimus explicabo ipsa, numquam sed dolorem rem est molestias deleniti. Iure ab omnis reiciendis sit quidem, numquam consectetur delectus, molestiae commodi quas?"
          },
          {
            id: 5,
            color: "yelow",
            text: "Lorem4ipsum dolor sit amet, consectetur adipisicing elit. Ducimus explicabo ipsa, numquam sed dolorem rem est molestias deleniti. Iure ab omnis reiciendis sit quidem, numquam consectetur delectus, molestiae commodi quas?"
          },
          {
            id: 6,
            color: "yelow",
            text: "Lorem4ipsum dolor sit amet, consectetur adipisicing elit. Ducimus explicabo ipsa, numquam sed dolorem rem est molestias deleniti. Iure ab omnis reiciendis sit quidem, numquam consectetur delectus, molestiae commodi quas?"
          }

        ]
    };
  }

  componentDidMount = () => {
      var localNotes = JSON.parse(localStorage.getItem('notes'));
      if (localNotes) {
          this.setState({ notes: localNotes });
      }
  }

  componentDidUpdate = () => {
      this._updateLocalStorage();
  }

  handleNoteDelete = (note) => {
      var noteId = note.id;
      var newNotes = this.state.notes.filter(function(note) {
          return note.id !== noteId;
      });
      this.setState({ notes: newNotes });
  }

  handleNoteAdd = (newNote) => {
      var newNotes = this.state.notes.slice();
      newNotes.unshift(newNote);
      this.setState({ notes: newNotes });
  }

  render() {
      return (
          <div className="notes-app">
              <h2 className="app-header">NotesApp</h2>
              <NoteEditor onNoteAdd={this.handleNoteAdd} />
              <NotesGrid notes={this.state.notes} onNoteDelete={this.handleNoteDelete} />
          </div>
      );
  }

  _updateLocalStorage() {
      var notes = JSON.stringify(this.state.notes);
      localStorage.setItem('notes', notes);
  }
}

export default App;
