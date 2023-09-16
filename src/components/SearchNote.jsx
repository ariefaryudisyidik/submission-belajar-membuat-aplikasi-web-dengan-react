import { useState } from 'react';
import './SearchNote.css';
import PropTypes from 'prop-types';

export default function SearchNote({ onSearchNote }) {
    const [search, setSearch] = useState('')

    const searchHandler = e => {
        setSearch(e.target.value);
    };

    const submitHandler = e => {
        e.preventDefault();

        const keyword = search.trim().toLowerCase();

        onSearchNote(keyword);
    }
    
    return (
        <form className='search_form' onSubmit={submitHandler}>
            <div className="search">
                <input type="search" placeholder="Cari" value={search} onChange={searchHandler} />
                <input type="submit" value="Cari" />
            </div>
        </form>
    );
}

SearchNote.propTypes = {
    onSearchNote: PropTypes.func.isRequired
};