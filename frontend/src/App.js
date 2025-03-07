import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar'; 
import Home from './pages/Home';
import Analysis from './pages/Analysis';
import Results from './pages/Results';
import Chat from './components/Chat';

const App = () => (
    <Router>
        <Navbar /> {/* Ensure Navbar is correctly imported and used */}
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/analyze" element={<Analysis />} />
            <Route path="/results" element={<Results />} />
            <Route path="/chat" element={<Chat />} />
        </Routes>
    </Router>
);

export default App;
