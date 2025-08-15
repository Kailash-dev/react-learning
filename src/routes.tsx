import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import ConceptsList from './concept-list/ConceptsList';
import ConceptDetail from './ConceptDetail';
import Home from './pages/Home/Index';

const concepts = [
  'functional-components',
  'class-components',
  'state-hooks',
  'effect-hooks',
  'context-api',
  'routing',
  'forms',
  'lifting-state-up',
  'refs',
  'error-boundaries',
  'portals',
  'memoization',
  'fragments',
  'children-props',
  'hoc',
  'render-props',
  'suspense-lazy-loading',
  'testing',
  'custom-hooks',
  'profiler-api',
  'strict-mode',
  'error-handling-hooks',
];

export default function AppRoutes() {
  return (
    <Routes>
       <Route path="/" element={<Navigate to="/home" replace />} />
      <Route path="/home" element={<Home />} />
      <Route path="/concepts" element={<ConceptsList />} />

      {/* Dynamic concept detail routes */}
      {concepts.map((concept) => (
        <Route
          key={concept}
          path={`/concepts/${concept}`}
          element={<ConceptDetail conceptId={concept} />}
        />
      ))}
    </Routes>
  );
}
