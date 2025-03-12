import React, { useState } from 'react';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simple validation (you can expand it as needed)
    if (!email || !password) {
      setError('Please fill in both fields');
    } else {
      setError('');
      // Submit logic (e.g., call an API for authentication)
      console.log('Logging in...', { email, password });
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="email"
            id="email"
            placeholder='Email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <input
            type="password"
            id="password"
            placeholder='Password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>

      <div className="links-container">
        <a href="/forgot-password" className="forgot-password-link">Forgot Password?</a>
        <a href="/register" className="register-link">Don't have an account? Register</a>
      </div>
    </div>
  );
};

export default Login;
