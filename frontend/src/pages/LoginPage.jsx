import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { loginUser } from '../api/client.js';

function LoginPage({ onLogin }) {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    email: '',
    password: '',
  });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');
    try {
      const response = await loginUser(form);
      localStorage.setItem('cfbc_user_email', form.email);
      if (onLogin) {
        onLogin(form.email);
      }
      setMessage(response.data);
      navigate('/dashboard');
    } catch (err) {
      const status = err.response?.status;
      if (status === 401) {
        setMessage('Invalid email or password');
      } else {
        const msg = err.response?.data?.message || err.response?.data || 'Login failed';
        setMessage(msg);
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-page">
      <div className="card">
        <h1>Login</h1>
        <form onSubmit={handleSubmit} className="form">
          <label>
            Email
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Password
            <input
              type="password"
              name="password"
              value={form.password}
              onChange={handleChange}
              required
            />
          </label>
          <button type="submit" disabled={loading}>
            {loading ? 'Signing in...' : 'Login'}
          </button>
        </form>
        {message && <p className="message">{message}</p>}
      </div>
    </div>
  );
}

export default LoginPage;


