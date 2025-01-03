import '.././App.css';
import api from '../api/axiosConfig.js';
import { useState } from 'react';

function RegisterPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [responseMessage, setResponseMessage] = useState('');

  // Function to handle login
  const handleRegister = async (e) => {
    e.preventDefault(); // Prevent page reload on form submission

    try {
      const response = await api.post('http://localhost:8080/api/v1/auth/Register', {
        headers: {
          'Content-Type': 'application/json', // Required header
        },
        username: email,
        password: password,
      });

      setResponseMessage('Register successful!');
    } catch (error) {
      console.error('Error during Register:', error);
      setResponseMessage(error.response?.data?.message || 'Register failed. Please try again.');
    }
  };

  return (
    <div className="App">
      <h1>Register</h1>
      <form onSubmit={handleRegister}>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default RegisterPage;