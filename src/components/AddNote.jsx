import { useState } from 'react';
import './AddNote.css';
import PropTypes from 'prop-types';

export default function AddNote({ onAddNote }) {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const titleHandler = (e) => {
    setTitle(() => {
      const inputTitle = e.target.value;
      const titleForm = document.getElementById('title_warning');
      titleForm.style.display = 'block';

      if (inputTitle <= 50) {
        return inputTitle;
      } else {
        return inputTitle.slice(0, 50);
      }
    });
  };

  const bodyHandler = (e) => {
    setBody(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();

    const note = {
      id: Date.now().toString(),
      title,
      body,
      archieved: false,
      createdAt: new Date().toISOString(),
    };

    console.log(note);

    onAddNote(note);
  };

  const blurHandler = (e) => {
    if (e.target.value.length === 0) {
      const titleForm = document.getElementById('title_warning');
      titleForm.style.display = 'none';
    }
  };

  return (
    <form className="add_note rounded" onSubmit={submitHandler}>
      <h2 className="title">Tambah Catatan</h2>
      <div>
        <label htmlFor="title">Judul Catatan</label>
        <input
          type="text"
          id="title"
          placeholder="Judul Catatan"
          value={title}
          onChange={titleHandler}
          onBlur={blurHandler}
          required
        />
        <p className={title.length === 50 ? 'warning' : ''} id="title_warning">
          {title.length < 50
            ? 'Sisa karakter judul:' + (50 - title.length)
            : 'Maksimal karakter judul adalah 50'}
        </p>
      </div>
      <div>
        <label htmlFor="body">Isi Catatan</label>
        <textarea
          name="body"
          id="body"
          rows="3"
          value={body}
          onChange={bodyHandler}
          placeholder="Isi Catatan"
          required
        ></textarea>
      </div>
      <div>
        <input type="submit" value="Tambah" className="button" />
      </div>
    </form>
  );
}

AddNote.propTypes = {
  onAddNote: PropTypes.func.isRequired,
};
