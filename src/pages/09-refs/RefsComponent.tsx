

export default function RefsComponent() {

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', lineHeight: '1.6', padding: '20px', maxWidth: '800px', margin: 'auto' }}>
      <h1 style={{ color: '#4A90E2' }}>React Refs</h1>

      <section style={{ marginBottom: '20px' }}>
        <h2>What are Refs?</h2>
        <p>
          Refs provide a way to access DOM nodes or React elements directly.
          They are commonly used to manage focus, text selection, or triggering animations imperatively.
        </p>
      </section>

      <section style={{ marginBottom: '20px' }}>
        <h2>Basic Example</h2>
        <p>Using <code>useRef</code> to focus an input field:</p>
        <pre style={{ background: '#f5f5f5', padding: '10px', borderRadius: '5px' }}>
{`import React, { useRef } from 'react';

function FocusInput() {
  const inputRef = useRef(null);

  const focusInput = () => {
    inputRef.current.focus();
  };

  return (
    <div>
      <input ref={inputRef} type="text" placeholder="Type something..." />
      <button onClick={focusInput}>Focus Input</button>
    </div>
  );
}`}
        </pre>
      </section>

      <section style={{ marginBottom: '20px' }}>
        <h2>Key Points</h2>
        <ul>
          <li><code>useRef</code> returns a mutable ref object with a <code>current</code> property.</li>
          <li>The ref object persists across renders without causing re-renders.</li>
          <li>Refs can be attached to DOM elements or React components using the <code>ref</code> attribute.</li>
          <li>Common use cases: managing focus, reading values, triggering animations, or integrating with third-party libraries.</li>
        </ul>
      </section>

      <section style={{ marginTop: '20px' }}>
        <h2>Summary</h2>
        <p>
          Refs provide an escape hatch to access DOM nodes or React elements directly, 
          enabling scenarios that are hard to achieve with state alone.
        </p>
      </section>
    </div>
  );
}
