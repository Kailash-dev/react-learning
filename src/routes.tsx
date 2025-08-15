import React, { Suspense } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import ConceptsList from './concept-list/ConceptsList';
import Home from './pages/Home/Index';
import { conceptComponentMap } from './conceptComponentMap';

// Simple Error Boundary
class ErrorBoundary extends React.Component<{ children: React.ReactNode }, { hasError: boolean }> {
  constructor(props: any) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(_: any) {
    return { hasError: true };
  }

  componentDidCatch(error: any, info: any) {
    console.error("Error loading component:", error, info);
  }

  render() {
    if (this.state.hasError) {
      return <div>Something went wrong while loading this page.</div>;
    }
    return this.props.children;
  }
}

// LazyRoute wrapper
const LazyRoute = ({ Component }: { Component: React.LazyExoticComponent<React.FC> }) => (
  <Suspense fallback={<div>Loading...</div>}>
    <Component />
  </Suspense>
);

export default function AppRoutes() {
  return (
    <ErrorBoundary>
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
    </ErrorBoundary>
  );
}
