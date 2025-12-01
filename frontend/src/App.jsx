import React, { useEffect, useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import HomePage from './pages/HomePage.jsx';
import RegisterPage from './pages/RegisterPage.jsx';
import LoginPage from './pages/LoginPage.jsx';
import DashboardPage from './pages/DashboardPage.jsx';
import NotesPage from './pages/NotesPage.jsx';

function App() {
  const [userEmail, setUserEmail] = useState(null);

  useEffect(() => {
    const stored = localStorage.getItem('cfbc_user_email');
    if (stored) {
      setUserEmail(stored);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('cfbc_user_email');
    setUserEmail(null);
  };

  return (
    <div className="app-shell">
      <header className="app-header">
        <div className="logo">CodeForBetterCareer</div>
        <nav className="nav-links">
          <Link to="/">Home</Link>
          {!userEmail && <Link to="/register">Register</Link>}
          {!userEmail && <Link to="/login">Login</Link>}
          {userEmail && <Link to="/dashboard">Dashboard</Link>}
          {userEmail && (
            <button type="button" className="nav-button" onClick={handleLogout}>
              Logout
            </button>
          )}
        </nav>
      </header>

      <main className="app-main">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage onLogin={setUserEmail} />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/notes" element={<NotesPage />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;

