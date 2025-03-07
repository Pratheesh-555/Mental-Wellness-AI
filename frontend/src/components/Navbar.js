import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaHome, FaChartLine, FaList, FaComments } from 'react-icons/fa'; // Correct import

const Navbar = () => {
  const location = useLocation(); // Get the current route

  return (
    <nav style={{ 
      padding: '10px', 
      backgroundColor: '#007bff', 
      color: '#fff', 
      display: 'flex', 
      justifyContent: 'space-around', 
      alignItems: 'center',
      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    }}>
      <Link 
        to="/" 
        style={{ 
          textDecoration: 'none', 
          color: location.pathname === '/' ? '#ffdd57' : '#fff', 
          fontWeight: 'bold',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <FaHome style={{ marginRight: '5px' }} /> Home
      </Link>
      <Link 
        to="/analyze" 
        style={{ 
          textDecoration: 'none', 
          color: location.pathname === '/analyze' ? '#ffdd57' : '#fff', 
          fontWeight: 'bold',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <FaChartLine style={{ marginRight: '5px' }} /> Analyze
      </Link>
      <Link 
        to="/results" 
        style={{ 
          textDecoration: 'none', 
          color: location.pathname === '/results' ? '#ffdd57' : '#fff', 
          fontWeight: 'bold',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <FaList style={{ marginRight: '5px' }} /> Results
      </Link>
      <Link 
        to="/chat" 
        style={{ 
          textDecoration: 'none', 
          color: location.pathname === '/chat' ? '#ffdd57' : '#fff', 
          fontWeight: 'bold',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <FaComments style={{ marginRight: '5px' }} /> Chat
      </Link>
    </nav>
  );
};

export default Navbar;