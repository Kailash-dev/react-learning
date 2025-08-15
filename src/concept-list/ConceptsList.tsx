
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Card from '../components/Card';

const concepts = [
  'Functional Components',
  'Class Components',
  'State Hooks',
  'Effect Hooks',
  'Context API',
  'Routing',
  'Forms',
  'Lifting State Up',
  'Refs',
  'Error Boundaries',
  'Portals',
  'Memoization',
  'Fragments',
  'Children Props',
  'HOC',
  'Render Props',
  'Suspense and Lazy Loading',
  'Testing',
  'Custom Hooks',
  'Profiler API',
  'Strict Mode',
  'Error Handling Hooks',
];

export default function ConceptsList() {
  const navigate = useNavigate();

  const handleCardClick = (concept: string) => {
    // Convert concept title to URL-friendly path
    const path = concept.toLowerCase().replace(/\s+/g, '-');
    navigate(`/concepts/${path}`);
  };

  return (
    <div
      style={{
        padding: '2rem 5%',
        maxWidth: '90vw',
        margin: 'auto',
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        backgroundColor: '#f9f9f9',
        minHeight: '100vh',
        boxSizing: 'border-box',
      }}
    >
      <h2
        style={{
          textAlign: 'center',
          marginBottom: '2.5rem',
          color: '#222',
          fontSize: '2.5rem',
          fontWeight: '700',
          letterSpacing: '1.5px',
        }}
      >
        React Concepts Listing
      </h2>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '1.5rem',
        }}
      >
        {concepts.map((concept, idx) => (
          <Card
            key={idx}
            title={concept}
            onClick={() => handleCardClick(concept)}
          />
        ))}
      </div>
    </div>
  );
}
