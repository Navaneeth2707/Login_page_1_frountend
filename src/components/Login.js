import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import logo from '../logo.png';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/login', { username: email, password }, { withCredentials: true });
      if (response.status === 200) {
        navigate('/secrets');
      }
    } catch (error) {
      console.error("Login failed:", error);
    }
  };
  const Register=()=>
  {
   navigate('/register');

  }

  return (
    <div className="container">
      <div className="login_logo">
        <img src={logo}/> 
      </div>
      <div className='loginpage'>
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="input-container">
            <label>
              <input placeholder="Email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
            </label>
            <label>
              <input placeholder="Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
            </label>
          </div>
          <br />
          <div className='btn'>
          <button type="submit">Login</button>
          <button onClick={Register}>New User</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
