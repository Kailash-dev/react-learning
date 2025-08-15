import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

export default function RoutingComponent() {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', lineHeight: '1.6', padding: '20px', maxWidth: '800px', margin: 'auto' }}>
      <h1 style={{ color: '#4A90E2' }}>React Routing</h1>

      <section style={{ marginBottom: '20px' }}>
        <h2>What is Routing in React?</h2>
        <p>
          Routing in React allows you to create single-page applications (SPAs) with multiple views.
          You can navigate between components without refreshing the page using <strong>React Router</strong>.
        </p>
      </section>

      <section style={{ marginBottom: '20px' }}>
        <h2>Basic Example</h2>
        <p>Example using React Router to create two pages:</p>
        <pre style={{ background: '#f5f5f5', padding: '10px', borderRadius: '5px' }}>
{`import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function Home() {
  return <h2>Home Page</h2>;
}

function About() {
  return <h2>About Page</h2>;
}

function App() {
  return (
    <Router>
      <nav>
        <Link to="/">Home</Link> | <Link to="/about">About</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}`}
        </pre>
      </section>

      <section style={{ marginBottom: '20px' }}>
        <h2>Key Points</h2>
        <ul>
          <li><strong>BrowserRouter</strong> wraps your application and enables routing.</li>
          <li><strong>Routes</strong> replaces <code>Switch</code> in React Router v6.</li>
          <li><strong>Route</strong> defines the path and the component to render.</li>
          <li><strong>Link</strong> is used for navigation without full page reloads.</li>
          <li>Dynamic routing is supported with URL parameters, e.g., <code>/users/:id</code>.</li>
        </ul>
      </section>

      <section style={{ marginTop: '20px' }}>
        <h2>Summary</h2>
        <p>
          React Router makes it easy to build SPA applications with multiple pages and dynamic navigation.
          It is the standard routing library for React.
        </p>
      </section>
    </div>
  );
}
