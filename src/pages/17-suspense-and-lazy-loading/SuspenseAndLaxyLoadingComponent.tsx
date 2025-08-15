import React, { lazy, Suspense } from 'react'

const LazyComponent = lazy(() => import('./LazyLoadedExample'));

export default function SuspenseAndLaxyLoadingComponent() {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', lineHeight: '1.6', padding: '20px', maxWidth: '800px', margin: 'auto' }}>
      <h1 style={{ color: '#4A90E2' }}>React Suspense and Lazy Loading</h1>

      <section style={{ marginBottom: '20px' }}>
        <h2>What is Lazy Loading?</h2>
        <p>
          Lazy loading allows components to be loaded only when they are needed, rather than at initial load.
          This improves performance and reduces bundle size for large React applications.
        </p>
      </section>

      <section style={{ marginBottom: '20px' }}>
        <h2>What is Suspense?</h2>
        <p>
          <strong>Suspense</strong> is a React component that lets you specify a fallback UI (like a loader) while waiting for a lazy-loaded component.
        </p>
      </section>

      <section style={{ marginBottom: '20px' }}>
        <h2>Basic Example</h2>
        <pre style={{ background: '#f5f5f5', padding: '10px', borderRadius: '5px' }}>
{`import React, { Suspense, lazy } from 'react';

const LazyComponent = lazy(() => import('./LazyComponent'));

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <LazyComponent />
    </Suspense>
  );
}`}
        </pre>
      </section>

      <section style={{ marginBottom: '20px' }}>
        <h2>Key Points</h2>
        <ul>
          <li>Use <code>React.lazy()</code> to dynamically import a component.</li>
          <li>Wrap lazy-loaded components with <code>&lt;Suspense&gt;</code> and provide a fallback UI.</li>
          <li>Helps in splitting code and improving initial load performance.</li>
          <li>Works only with default exports in lazy-loaded modules.</li>
        </ul>
      </section>

      <section style={{ marginTop: '20px' }}>
        <h2>Summary</h2>
        <p>
          Suspense and lazy loading together enable code splitting in React, improving performance and user experience by loading components only when needed.
        </p>
      </section>

      <section style={{ marginTop: '20px' }}>
        <h2>Try it Out</h2>
        <Suspense fallback={<div>Loading Lazy Component...</div>}>
          <LazyComponent />
        </Suspense>
      </section>
    </div>
  );
}
