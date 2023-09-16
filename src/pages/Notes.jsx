import { useState } from "react";
import './Notes.css';
import { notesList } from '../notes.js';
import NoteCard from "../components/NoteCard";
import AddNote from "../components/AddNote";
import SearchNote from "../components/SearchNote";

export default function Notes() {    
    const [notes, setNotes] = useState(notesList.filter(note => !note.archieved));
    const [searching, setSearching] = useState(false);
    const [searchResult, setSearchResult] = useState([]);
    const [archieved, setArchieved] = useState(notesList.filter(note => note.archieved));
    const [showArchieved, setShowArchieved] = useState(false);

    const addNote = note => {
        setNotes(prev => [note, ...prev]);
    };

    const deleteNote = noteId => {
        if (showArchieved) {
            setArchieved(prev => [...prev.filter(note => note.id !== noteId)]);
        } else {
            setNotes(prev => [...prev.filter(note => note.id !== noteId)]);
        }
    };

    const searchNote = keyword => {
        setSearching(true);

        if (showArchieved) {
            setSearchResult(archieved.filter(note => {
                const regex = new RegExp(keyword, 'gi');
                const result = note.title.match(regex);
                if (result?.length > 0) return note;
            }));
        } else {
            setSearchResult(notes.filter(note => {
                const regex = new RegExp(keyword, 'gi');
                const result = note.title.match(regex);
                if (result?.length > 0) return note;
            }));
        }
    }

    const showArchievedHandler = () => setShowArchieved(prev => {
        setSearching(false);

        return !prev;
    });

    const archieveNote = noteId => {
        const note = notes.filter(note => note.id === noteId);

        note[0].archieved = true;
        console.log(note[0]);

        setNotes(prev => prev.filter(note => note.id !== noteId));
        setArchieved(prev => [...note, ...prev]);
    };

    const moveToNotes = noteId => {
        const note = archieved.filter(note => note.id === noteId);

        note[0].archieved = false;
        console.log(note[0]);

        setArchieved(prev => prev.filter(note => note.id !== noteId));
        setNotes(prev => [...note, ...prev]);
    };
    
    return (
        <div className="container">
            <h1 className="title">React Notes</h1>
            <AddNote onAddNote={addNote} />
            <SearchNote onSearchNote={searchNote} />
            <h2 className="title">{ showArchieved ? 'Daftar Arsip Catatan' : 'Daftar Catatan' }</h2>
            <div id="archieved">
                <button onClick={showArchievedHandler}>Tampilkan { showArchieved ? 'Catatan' : 'Arsip Catatan' }</button>
            </div>
            { searching && <h2 className="title">Hasil pencarian</h2>}
            { searching ? searchResult.length === 0 ? <h2 className="title">Tidak ada { showArchieved ? 'arsip catatan' : 'catatan' } yang sesuai</h2> : searchResult.map(note => (<NoteCard key={note.id} note={note} onDeleteNote={deleteNote} onArchieveNote={archieveNote} onMoveToNotes={moveToNotes} />)) : showArchieved ? archieved.length === 0 ? <h2 className="title">Belum ada arsip catatan</h2> : archieved.map(note => <NoteCard key={note.id} note={note} onDeleteNote={deleteNote}  onArchieveNote={archieveNote} onMoveToNotes={moveToNotes} />) : notes.length === 0 ? <h2 className="title">Belum ada catatan</h2> : notes.map(note => (
                <NoteCard key={note.id} note={note} onDeleteNote={deleteNote} onArchieveNote={archieveNote} onMoveToNotes={moveToNotes} />
            )) }
        </div>
    );
}