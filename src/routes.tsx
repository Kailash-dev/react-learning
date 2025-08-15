import React, { Suspense } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import ConceptsList from './concept-list/ConceptsList';
import Home from './pages/Home/Index';
import { conceptComponentMap } from './conceptComponentMap';

// LazyRoute wrapper to simplify Suspense usage
const LazyRoute = ({ Component }: { Component: React.LazyExoticComponent<React.FC> }) => (
  <Suspense fallback={<div>Loading...</div>}>
    <Component />
  </Suspense>
);

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" replace />} />
      <Route path="/home" element={<Home />} />
      <Route path="/concepts" element={<ConceptsList />} />

      {Object.entries(conceptComponentMap).map(([route, Component]) => (
        <Route
          key={route}
          path={`/concepts/${route}`}
          element={<LazyRoute Component={Component} />}
        />
      ))}
    </Routes>
  );
}
