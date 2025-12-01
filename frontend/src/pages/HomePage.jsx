import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { fetchCourses, fetchNotes } from '../api/client.js';

function HomePage({ userEmail }) {
  const [courses, setCourses] = useState([]);
  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [notesLoading, setNotesLoading] = useState(true);

  useEffect(() => {
    const load = async () => {
      try {
        const response = await fetchCourses();
        setCourses(response.data);
      } catch (e) {
        console.error('Failed to load courses', e);
      } finally {
        setLoading(false);
      }
    };

    load();
  }, []);

  useEffect(() => {
    if (!userEmail) {
      setNotesLoading(false);
      return;
    }

    const loadNotes = async () => {
      try {
        const response = await fetchNotes(true); // fetch featured notes
        setNotes(response.data);
      } catch (e) {
        console.error('Failed to load notes', e);
      } finally {
        setNotesLoading(false);
      }
    };

    loadNotes();
  }, [userEmail]);

  return (
    <div className="home">
      <section className="hero">
        <div className="hero-content">
          <h1>The Best Online Learning Platform</h1>
          <p>
            Learn from expert instructors, follow structured career paths and build real-world
            projects that prepare you for your dream job.
          </p>
          <div className="hero-actions">
            <Link to="/register" className="btn btn-primary">
              Get Started
            </Link>
            <Link to="/login" className="btn btn-secondary">
              I already have an account
            </Link>
          </div>
          <div className="hero-metrics">
            <div>
              <span className="metric-number">150+</span>
              <span className="metric-label">Expert Mentors</span>
            </div>
            <div>
              <span className="metric-number">3000+</span>
              <span className="metric-label">Students</span>
            </div>
            <div>
              <span className="metric-number">120+</span>
              <span className="metric-label">Career Tracks</span>
            </div>
          </div>
        </div>
        <div className="hero-image-placeholder" />
      </section>

      <section className="section">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.4rem' }}>
          <h2 style={{ margin: 0 }}>Explore Handwritten Notes</h2>
          <Link to="/notes" className="btn btn-secondary" style={{ fontSize: '0.9rem', padding: '0.5rem 1rem' }}>
            View All
          </Link>
        </div>
        {!userEmail ? (
          <p style={{ color: '#cbd5f5' }}>
            Sign up or login to unlock free handwritten notes and premium study material.
          </p>
        ) : (
          <div className="grid grid-3">
            {notesLoading && <p>Loading notes...</p>}
            {!notesLoading &&
              notes.slice(0, 6).map((note) => (
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
        )}
      </section>

      <section className="section">
        <h2>Popular Courses</h2>
        <div className="grid grid-3">
          {loading && <p>Loading courses...</p>}
          {!loading &&
            courses.map((course) => (
              <article key={course.id} className="course-card">
                <h3>{course.title}</h3>
                <p>{course.shortDescription}</p>
                <p className="course-meta">
                  <span>{course.category}</span>
                  {course.level && <span> • {course.level}</span>}
                  {course.price != null && <span> • ₹{course.price}</span>}
                </p>
              </article>
            ))}
        </div>
      </section>

      <section className="section">
        <h2>Expert Instructors</h2>
        <div className="grid grid-4">
          <div className="instructor-card">
            <div className="avatar" />
            <span className="name">Soumen</span>
            <span className="role">Full-Stack Mentor</span>
          </div>
          <div className="instructor-card">
            <div className="avatar" />
            <span className="name">Mentor A</span>
            <span className="role">Backend Specialist</span>
          </div>
          <div className="instructor-card">
            <div className="avatar" />
            <span className="name">Mentor B</span>
            <span className="role">Data Engineer</span>
          </div>
          <div className="instructor-card">
            <div className="avatar" />
            <span className="name">Mentor C</span>
            <span className="role">Frontend Lead</span>
          </div>
        </div>
      </section>

      <section className="section section--alt">
        <h2>What Students Say</h2>
        <div className="grid grid-3">
          <div className="testimonial">
            “This platform helped me move from confusion to a clear roadmap and my first dev job.”
          </div>
          <div className="testimonial">
            “Very practical, project-based learning. Exactly what I needed to build confidence.”
          </div>
          <div className="testimonial">
            “Mentors actually review code and guide you like a real team lead.”
          </div>
        </div>
      </section>

      <footer className="footer">
        <div>© {new Date().getFullYear()} CodeForBetterCareer. All rights reserved.</div>
        <div className="footer-links">
          <a href="#courses">Courses</a>
          <a href="#mentors">Mentors</a>
          <a href="#contact">Contact</a>
        </div>
      </footer>
    </div>
  );
}

export default HomePage;


