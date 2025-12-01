import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:8080',
});

export function registerUser(data) {
  return api.post('/api/v1/users/register', data);
}

export function loginUser({ email, password }) {
  const authHeader = 'Basic ' + btoa(`${email}:${password}`);
  return api.post(
    '/api/v1/auth/login',
    { email, password },
    {
      headers: {
        Authorization: authHeader,
      },
    }
  );
}

export function fetchCourses() {
  return api.get('/api/v1/courses');
}

export function fetchNotes(featured = false, subject = null) {
  const params = {};
  if (featured) params.featured = true;
  if (subject) params.subject = subject;
  return api.get('/api/v1/notes', { params });
}

export default api;


