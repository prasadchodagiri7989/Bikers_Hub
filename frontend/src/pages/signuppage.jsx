import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/global.css';

const SignUpPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate();

  const handleSignUp = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert('Passwords do not match');
      return;
    }
    console.log('Email:', email, 'Password:', password);
    navigate('/login');
  };

  return (
    <div className='flex flex-col justify-center items-center h-[80vh] w-[100vw]'>
    <div className="auth-container">
      <h2>Sign Up</h2>
      <form onSubmit={handleSignUp}>
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
        <div className="form-group">
          <label>Confirm Password:</label>
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="auth-button">Sign Up</button>
      </form>
      <p>
        Already have an account?{' '}
        <span className="auth-link cursor-pointer" onClick={() => navigate('/login')}>
          Login
        </span>
      </p>
    </div>
    </div>
  );
};

export default SignUpPage;