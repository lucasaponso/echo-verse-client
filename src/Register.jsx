import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Importing Link

const Register = () => {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simple validation
    if (!email || !password || !confirmPassword || !username) {
      setError('Please fill in all fields');
    } else if (password !== confirmPassword) {
      setError('Passwords do not match');
    } else {
      setError('');
      // Submit logic (e.g., call an API for registration)
      console.log('Registering...', { email, username, password });
    }
  };

  return (
    <div className="register-container">
      <img 
        src="image.png" 
        alt="example"
        style={{ width: '300px', height: 'auto', margin: '0 auto -100px' }} 
      />
      <h2>Welcome</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="email"
            id="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

        </div>
        <div>
        
            <input
              type="text"
              id="username"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />

        </div>
        
        <div>
          <input
            type="password"
            id="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div>
          <input
            type="password"
            id="confirm-password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Register</button> {/* Changed button text */}

        
      </form>
      <div className="links-container">
        <Link to="/login" className="login-link">Already have an account? Login</Link>
      </div>
    </div>
  );
};

export default Register;
