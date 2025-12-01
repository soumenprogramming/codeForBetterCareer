import React, { useState } from 'react';
import { registerUser } from '../api/client.js';

function RegisterPage() {
  const [form, setForm] = useState({
    email: '',
    password: '',
    fullName: '',
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
      const response = await registerUser(form);
      setMessage(`Registered: ${response.data.email}`);
    } catch (err) {
      const msg = err.response?.data?.message || err.response?.data || 'Registration failed';
      setMessage(msg);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-page">
      <div className="card">
        <h1>Create your student account</h1>
        <form onSubmit={handleSubmit} className="form">
          <label>
            Full name
            <input
              type="text"
              name="fullName"
              value={form.fullName}
              onChange={handleChange}
              required
            />
          </label>
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
              minLength={6}
            />
          </label>
          <button type="submit" disabled={loading}>
            {loading ? 'Registering...' : 'Register'}
          </button>
        </form>
        {message && <p className="message">{message}</p>}
      </div>
    </div>
  );
}

export default RegisterPage;


