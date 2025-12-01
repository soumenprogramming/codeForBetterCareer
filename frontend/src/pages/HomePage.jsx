import React from 'react';
import { Link } from 'react-router-dom';

function HomePage() {
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
        <h2>Course Categories</h2>
        <div className="grid grid-3">
          <article className="tile">Web Development</article>
          <article className="tile">Data &amp; AI</article>
          <article className="tile">Cloud &amp; DevOps</article>
          <article className="tile">Programming Basics</article>
          <article className="tile">Interview Prep</article>
          <article className="tile">Career Guidance</article>
        </div>
      </section>

      <section className="section">
        <h2>Popular Courses</h2>
        <div className="grid grid-3">
          <article className="course-card">
            <h3>Full-Stack Developer Roadmap</h3>
            <p>React, Spring Boot, databases and deployment, from zero to production.</p>
          </article>
          <article className="course-card">
            <h3>Data Structures &amp; Algorithms</h3>
            <p>Level up for product-company interviews with hands-on problems.</p>
          </article>
          <article className="course-card">
            <h3>System Design for Beginners</h3>
            <p>Learn how to design scalable systems with real interview-style case studies.</p>
          </article>
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


