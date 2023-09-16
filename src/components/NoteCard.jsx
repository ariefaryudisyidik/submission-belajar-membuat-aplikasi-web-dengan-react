import './NoteCard.css';
import PropTypes from 'prop-types';

export default function NoteCard({ note, onDeleteNote, onArchieveNote, onMoveToNotes }) {
    const clickHandler = () => {
        onDeleteNote(note.id);
    };

    const archieveHandler = () => {
        console.log('archieving');

        onArchieveNote(note.id);
    }

    const moveToNotesHandler = () => {
        console.log('Moving to notes');

        onMoveToNotes(note.id);
    }

    return (
        <div className='card'>
            <h2>{ note.title }</h2>
            <h4>Created at { new Date(note.createdAt).toDateString() }</h4>
            <p>{ note.body }</p>
            <div className="button">
                <button onClick={note.archieved ? moveToNotesHandler : archieveHandler} className='archieve'>{ note.archieved ? 'Pindahkan' : 'Arsipkan' }</button>
                <button onClick={clickHandler} className='delete'>Hapus</button>
            </div>
        </div>
    )
}

NoteCard.propTypes = {
    note: PropTypes.object.isRequired,
    onDeleteNote: PropTypes.func.isRequired,
    onArchieveNote: PropTypes.func.isRequired,
    onMoveToNotes: PropTypes.func.isRequired
};