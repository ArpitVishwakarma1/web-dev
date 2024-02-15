
import React, { useState } from 'react';

const NoteForm = ({ addNote }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addNote({
      title,
      content,
    });
    setTitle('');
    setContent('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="border-b-2 mb-2 focus:outline-none focus:border-blue-500"
      />
      <textarea
        placeholder="Content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        className="border-2 focus:outline-none focus:border-blue-500 p-2"
      ></textarea>
      <button type="submit" className="bg-blue-500 text-white py-2 px-4 mt-4 rounded-lg">
        Add Note
      </button>
    </form>
  );
};

export default NoteForm;
