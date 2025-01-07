import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/global.css';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // Perform authentication logic here
    console.log('Email:', email, 'Password:', password);
    navigate('/'); // Redirect to the home page after login
  };

  return (
    <div className="auth-container">
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="auth-button">Login</button>
      </form>
      <p>
        Don't have an account?{' '}
        <span className="auth-link cursor-pointer" onClick={() => navigate('/signup')}>
          Sign up
        </span>
      </p>
    </div>
  );
};

export default LoginPage;