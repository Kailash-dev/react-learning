import React from 'react'

export default function EffectHookComponent() {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', lineHeight: '1.6', padding: '20px', maxWidth: '800px', margin: 'auto' }}>
      <h1 style={{ color: '#4A90E2' }}>React Effect Hook (useEffect)</h1>

      <section style={{ marginBottom: '20px' }}>
        <h2>What is useEffect?</h2>
        <p>
          <strong>useEffect</strong> is a Hook that lets you perform side effects in functional components.
          Side effects include data fetching, subscriptions, manually changing the DOM, and more.
        </p>
      </section>

      <section style={{ marginBottom: '20px' }}>
        <h2>Basic Example</h2>
        <p>Using <code>useEffect</code> to update the document title whenever the count changes:</p>
        <pre style={{ background: '#f5f5f5', padding: '10px', borderRadius: '5px' }}>
{`import React, { useState, useEffect } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = \`Count: \${count}\`;
  }, [count]); // Runs only when 'count' changes

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}`}
        </pre>
      </section>

      <section style={{ marginBottom: '20px' }}>
        <h2>Key Points</h2>
        <ul>
          <li><strong>useEffect</strong> runs after the render is committed to the screen.</li>
          <li>The second argument is an array of dependencies. The effect runs when any dependency changes.</li>
          <li>If you pass an empty array <code>[]</code>, the effect runs only once, similar to <code>componentDidMount</code>.</li>
          <li>Return a cleanup function from the effect to handle unmounting or cleanup tasks.</li>
        </ul>
      </section>

      <section style={{ marginTop: '20px' }}>
        <h2>Example with Cleanup</h2>
        <pre style={{ background: '#f5f5f5', padding: '10px', borderRadius: '5px' }}>
{`function Timer() {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds(s => s + 1);
    }, 1000);

    // Cleanup function
    return () => clearInterval(interval);
  }, []);

  return <p>Seconds elapsed: {seconds}</p>;
}`}
        </pre>
      </section>

      <section style={{ marginTop: '20px' }}>
        <h2>Summary</h2>
        <p>
          <strong>useEffect</strong> replaces lifecycle methods like <code>componentDidMount</code>, 
          <code>componentDidUpdate</code>, and <code>componentWillUnmount</code> in functional components. 
          It is the key tool for handling side effects in React.
        </p>
      </section>
    </div>
  );
}
