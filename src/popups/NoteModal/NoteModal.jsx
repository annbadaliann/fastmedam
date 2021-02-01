import React, { useState } from 'react';
import './NoteModal.style.scss';

const AddNoteModal = ({ propsDescription, onSubmit }) => {
    const [description, setDescription] = useState(propsDescription);

    changeHandler = e => setDescription(e.target.value);

    saveNote = () => onSubmit({ description });

    return (
        <div className="add-note-modal">
            <div className="add-note-modal-container">
                <h3>Add note</h3>
                <p>Write note to medecine</p>
                <textarea onChange={changeHandler} value={description}>{description}</textarea>
                <button className="G-button" onClick={saveNote}>Save note</button>
            </div>
        </div>
    )
}

export default AddNoteModal;