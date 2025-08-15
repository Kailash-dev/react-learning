import React, { StrictMode, useState } from 'react'

export default function StrictModeComponent() {
const [count, setCount] = useState(0);

  return (
    <StrictMode>
      <div style={{ fontFamily: 'Arial, sans-serif', lineHeight: '1.6', padding: '20px', maxWidth: '800px', margin: 'auto' }}>
        <h1 style={{ color: '#4A90E2' }}>React Strict Mode</h1>

        <section style={{ marginBottom: '20px' }}>
          <h2>What is Strict Mode?</h2>
          <p>
            <strong>StrictMode</strong> is a tool for highlighting potential problems in an application.
            It activates additional checks and warnings for its descendants in development mode.
          </p>
        </section>

        <section style={{ marginBottom: '20px' }}>
          <h2>Key Features</h2>
          <ul>
            <li>Identifies unsafe lifecycle methods in class components.</li>
            <li>Warns about deprecated APIs.</li>
            <li>Detects unexpected side effects.</li>
            <li>Helps with detecting legacy context API usage.</li>
          </ul>
        </section>

        <section style={{ marginBottom: '20px' }}>
          <h2>Example Usage</h2>
          <pre style={{ background: '#f5f5f5', padding: '10px', borderRadius: '5px' }}>
{`import React, { StrictMode } from 'react';
import App from './App';

<StrictMode>
  <App />
</StrictMode>`}
          </pre>
          <p>
            Wrapping your app or component tree in <code>&lt;StrictMode&gt;</code> enables these checks in development.
          </p>
        </section>

        <section style={{ marginBottom: '20px' }}>
          <h2>Try it Out</h2>
          <div style={{ marginTop: '10px', padding: '10px', backgroundColor: '#fce4ec', borderRadius: '6px' }}>
            <p>Count: {count}</p>
            <button onClick={() => setCount(count + 1)}>Increment</button>
          </div>
        </section>

        <section style={{ marginTop: '20px' }}>
          <h2>Summary</h2>
          <p>
            StrictMode is a development tool to ensure your React app follows best practices and avoids unsafe patterns. 
            It does not affect production builds.
          </p>
        </section>
      </div>
    </StrictMode>
  );
}
