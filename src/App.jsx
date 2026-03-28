import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import PortfolioContainer from './pages/PortfolioContainer';


function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/home" element={<PortfolioContainer />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default App;
