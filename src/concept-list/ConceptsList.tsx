import React from 'react';
import { Link } from 'react-router-dom';
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
  'Memoization (React.memo, useMemo, useCallback)',
  'Fragments',
  'Children Props',
  'Higher-Order Components (HOC)',
  'Render Props',
  'Suspense and Lazy Loading',
  'Testing (Jest, React Testing Library)',
  'Custom Hooks',
  'Profiler API',
  'Strict Mode',
  'Error Handling in Hooks',
];

export default function ConceptsList() {
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
      <Card key={idx} title={concept} />
    ))}
  </div>

  <div style={{ textAlign: 'center', marginTop: '3rem' }}>
    <Link
      to="/"
      style={{
        textDecoration: 'none',
        color: '#fff',
        backgroundColor: '#007acc',
        padding: '0.75rem 2rem',
        borderRadius: '30px',
        fontWeight: '600',
        fontSize: '1.1rem',
        boxShadow: '0 4px 10px rgba(0, 122, 204, 0.4)',
        transition: 'background-color 0.3s ease, box-shadow 0.3s ease',
      }}
      onMouseEnter={e => {
        (e.currentTarget as HTMLAnchorElement).style.backgroundColor = '#005fa3';
        (e.currentTarget as HTMLAnchorElement).style.boxShadow = '0 6px 15px rgba(0, 95, 163, 0.6)';
      }}
      onMouseLeave={e => {
        (e.currentTarget as HTMLAnchorElement).style.backgroundColor = '#007acc';
        (e.currentTarget as HTMLAnchorElement).style.boxShadow = '0 4px 10px rgba(0, 122, 204, 0.4)';
      }}
    >
      Back to Home
    </Link>
  </div>
</div>

  );
}
