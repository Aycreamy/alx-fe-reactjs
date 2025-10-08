// src/components/RegistrationForm.jsx
import React, { useState } from 'react';
import axios from 'axios';

export default function RegistrationForm() {
  // Form states
  const [form, setForm] = useState({ username: '', email: '', password: '' });
  const [errors, setErrors] = useState({});
  const [apiStatus, setApiStatus] = useState({
    loading: false,
    success: null,
    message: '',
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: '' })); // clear field-specific error
  };

  // Simple validation
  const validate = () => {
    const err = {};
    if (!form.username.trim()) err.username = 'Username is required';
    if (!form.email.trim()) err.email = 'Email is required';
    else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\\.[A-Z]{2,}$/i.test(form.email))
      err.email = 'Invalid email';
    if (!form.password) err.password = 'Password is required';
    else if (form.password.length < 6)
      err.password = 'Password must be at least 6 characters';
    return err;
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    const v = validate();
    if (Object.keys(v).length) {
      setErrors(v);
      return;
    }

    setApiStatus({ loading: true, success: null, message: '' });

    try {
      const payload = { email: form.email, password: form.password };
      const res = await axios.post('https://reqres.in/api/register', payload);
      setApiStatus({
        loading: false,
        success: true,
        message: `Registered (id: ${res.data.id || 'n/a'}) token: ${
          res.data.token || ''
        }`,
      });
      setForm({ username: '', email: '', password: '' });
    } catch (err) {
      const msg = err.response?.data?.error || err.message;
      setApiStatus({ loading: false, success: false, message: msg });
    }
  };

  // JSX form UI
  return (
    <form onSubmit={handleSubmit} style={{ maxWidth: 420, margin: '0 auto' }}>
      <h2>Controlled Registration Form</h2>

      <label>
        Username
        <input name="username" value={form.username} onChange={handleChange} />
      </label>
      {errors.username && <div style={{ color: 'red' }}>{errors.username}</div>}

      <label>
        Email
        <input name="email" value={form.email} onChange={handleChange} />
      </label>
      {errors.email && <div style={{ color: 'red' }}>{errors.email}</div>}

      <label>
        Password
        <input
          name="password"
          type="password"
          value={form.password}
          onChange={handleChange}
        />
      </label>
      {errors.password && (
        <div style={{ color: 'red' }}>{errors.password}</div>
      )}

      <button type="submit" disabled={apiStatus.loading}>
        {apiStatus.loading ? 'Submitting...' : 'Register'}
      </button>

      {apiStatus.message && (
        <div
          style={{
            color: apiStatus.success ? 'green' : 'red',
            marginTop: 8,
          }}
        >
          {apiStatus.message}
        </div>
      )}

      <div style={{ marginTop: 12, fontSize: 12 }}>
        Tip: To test a successful reqres register use{' '}
        <code>eve.holt@reqres.in</code> as the email and any password.
      </div>
    </form>
  );
}
