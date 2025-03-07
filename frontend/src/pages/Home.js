import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => (
  <div style={{ textAlign: 'center', padding: '20px' }}>
    <h1 style={{ color: '#007bff' }}>Welcome to Mental Wellness AI</h1>
    <p style={{ fontSize: '18px', color: '#333' }}>Your mental health matters. Start your analysis now!</p>
    <div style={{ marginTop: '20px' }}>
      <Link 
        to="/analyze" 
        style={{ 
          textDecoration: 'none', 
          backgroundColor: '#007bff', 
          color: '#fff', 
          padding: '10px 20px', 
          borderRadius: '5px',
          margin: '0 10px',
        }}
      >
        Analyze
      </Link>
      <Link 
        to="/chat" 
        style={{ 
          textDecoration: 'none', 
          backgroundColor: '#28a745', 
          color: '#fff', 
          padding: '10px 20px', 
          borderRadius: '5px',
          margin: '0 10px',
        }}
      >
        Chat
      </Link>
    </div>
  </div>
);

export default Home;