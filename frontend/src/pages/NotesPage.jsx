import React, { useEffect, useState } from 'react';
import { fetchNotes } from '../api/client.js';

function NotesPage({ userEmail }) {
  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedSubject, setSelectedSubject] = useState(null);

  if (!userEmail) {
    return (
      <div className="home" style={{ maxWidth: '1120px', margin: '0 auto' }}>
        <section className="section">
          <h1 style={{ marginBottom: '1rem' }}>Login to access notes</h1>
          <p style={{ color: '#cbd5f5' }}>Please login or register to view detailed handwritten notes.</p>
        </section>
      </div>
    );
  }

  const subjects = [
    'Computer Fundamentals',
    'Machine Learning',
    'Object-Oriented Programming',
    'Computer Networks',
    'Operating System',
    'Database Management System',
  ];

  useEffect(() => {
    const load = async () => {
      try {
        setLoading(true);
        const response = selectedSubject
          ? await fetchNotes(false, selectedSubject)
          : await fetchNotes(false);
        setNotes(response.data);
      } catch (e) {
        console.error('Failed to load notes', e);
      } finally {
        setLoading(false);
      }
    };

    load();
  }, [selectedSubject]);

  return (
    <div className="home" style={{ maxWidth: '1120px', margin: '0 auto' }}>
      <section className="section">
        <h1 style={{ marginBottom: '1rem' }}>Explore Handwritten Notes</h1>
        <p style={{ color: '#cbd5f5', marginBottom: '2rem' }}>
          Browse top class notes written by toppers for you.
        </p>

        <div style={{ marginBottom: '2rem', display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
          <button
            className={selectedSubject === null ? 'filter-btn active' : 'filter-btn'}
            onClick={() => setSelectedSubject(null)}
          >
            All Notes
          </button>
          {subjects.map((subject) => (
            <button
              key={subject}
              className={selectedSubject === subject ? 'filter-btn active' : 'filter-btn'}
              onClick={() => setSelectedSubject(subject)}
            >
              {subject}
            </button>
          ))}
        </div>

        <div className="grid grid-3">
          {loading && <p>Loading notes...</p>}
          {!loading && notes.length === 0 && <p>No notes found for this category.</p>}
          {!loading &&
            notes.map((note) => (
              <article key={note.id} className="note-card">
                <div className="note-icon">{note.subject.charAt(0)}</div>
                <h3>{note.title}</h3>
                <p className="note-subject">{note.subject}</p>
                {note.shortDescription && <p className="note-desc">{note.shortDescription}</p>}
                <a href={note.url} className="note-link" target="_blank" rel="noopener noreferrer">
                  View Notes →
                </a>
              </article>
            ))}
        </div>
      </section>
    </div>
  );
}

export default NotesPage;

