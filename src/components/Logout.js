import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Logout() {
  const navigate = useNavigate();

  useEffect(() => {
    const logout = async () => {
      try {
        await axios.get('http://localhost:5000/api/logout', { withCredentials: true });
        navigate('/login');
      } catch (error) {
        console.error('Error during logout', error);
      }
    };

    logout();
  }, [navigate]);

  return <div>Logging out...</div>;
}

export default Logout;
