import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { loginUser } from '../../redux/actions/authActions';
import './Login.css'; // Import the CSS file for styling

const Login = () => {
  const dispatch = useDispatch();
  const [error, setError] = useState(null);

  const handleLogin = (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    const user = {
      email: data.get('email'),
      password: data.get('password'),
    };

    // Basic validation
    if (!user.email || !user.password) {
      setError('Please fill in both fields');
      return;
    }

    dispatch(loginUser(user));
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h2 className="login-title">Login</h2>
        <form onSubmit={handleLogin} className="login-form">
          <input
            name="email"
            type="email"
            placeholder="Email"
            required
            className="login-input"
          />
          <input
            name="password"
            type="password"
            placeholder="Password"
            required
            className="login-input"
          />
          <button type="submit" className="login-button">Login</button>
        </form>
        {error && <div className="login-error">{error}</div>}
      </div>
    </div>
  );
};

export default Login;

