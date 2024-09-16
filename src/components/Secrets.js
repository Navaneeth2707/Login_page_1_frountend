import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Secret = () => {
  const [secret, setSecret] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchSecret = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/secrets', { withCredentials: true });
        setSecret(response.data.secret);
      } catch (error) {
        if (error.response?.status === 401) {
          navigate('/login');
        }
      }
    };

    fetchSecret();
  }, [navigate]);

  const handleLogout = async () => {
    try {
      await axios.get('http://localhost:5000/api/logout', { withCredentials: true });
      navigate('/login');
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  return (
    <div>
      <h2>Your Secret</h2>
      <p>{secret}</p>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Secret;
