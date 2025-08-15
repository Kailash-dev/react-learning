import React from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';

import './App.css';
import AppRoutes from './routes';




export default function App() {
  return (
    <Router>
      <AppRoutes />
    </Router>
  );
}
