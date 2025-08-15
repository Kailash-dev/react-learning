import React, { useState } from 'react'

export default function TestingComponent() {
const [count, setCount] = useState(0);

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', lineHeight: '1.6', padding: '20px', maxWidth: '800px', margin: 'auto' }}>
      <h1 style={{ color: '#4A90E2' }}>Testing in React</h1>

      <section style={{ marginBottom: '20px' }}>
        <h2>Why Test React Components?</h2>
        <ul>
          <li>Ensure components work as expected.</li>
          <li>Catch bugs early in development.</li>
          <li>Maintain code reliability during refactoring.</li>
        </ul>
      </section>

      <section style={{ marginBottom: '20px' }}>
        <h2>Basic Example Component</h2>
        <p>This simple counter component can be tested:</p>
        <pre style={{ background: '#f5f5f5', padding: '10px', borderRadius: '5px' }}>
{`function Counter() {
  const [count, setCount] = useState(0);
  return (
    <>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </>
  );
}`}
        </pre>

        <div style={{ marginTop: '10px' }}>
          <p>Try it out:</p>
          <p>Count: {count}</p>
          <button onClick={() => setCount(count + 1)}>Increment</button>
        </div>
      </section>

      <section style={{ marginBottom: '20px' }}>
        <h2>Testing with React Testing Library</h2>
        <pre style={{ background: '#f5f5f5', padding: '10px', borderRadius: '5px' }}>
{`import { render, screen, fireEvent } from '@testing-library/react';
import Counter from './Counter';

test('increments counter on button click', () => {
  render(<Counter />);
  const button = screen.getByText(/increment/i);
  fireEvent.click(button);
  expect(screen.getByText(/count: 1/i)).toBeInTheDocument();
});`}
        </pre>
      </section>

      <section style={{ marginTop: '20px' }}>
        <h2>Summary</h2>
        <p>
          Testing with Jest and React Testing Library ensures components behave correctly, helps prevent regressions, and boosts confidence during refactoring.
        </p>
      </section>
    </div>
  );
}
