import React, { useEffect, useState } from 'react'

// Example of a custom hook
function useWindowWidth() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return width;
}

export default function CustomHookComponent() {
   const width = useWindowWidth();

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', lineHeight: '1.6', padding: '20px', maxWidth: '800px', margin: 'auto' }}>
      <h1 style={{ color: '#4A90E2' }}>Custom Hooks in React</h1>

      <section style={{ marginBottom: '20px' }}>
        <h2>What is a Custom Hook?</h2>
        <p>
          A <strong>Custom Hook</strong> is a JavaScript function whose name starts with <code>use</code> and that can call other hooks.
          It allows you to extract and reuse stateful logic between components.
        </p>
      </section>

      <section style={{ marginBottom: '20px' }}>
        <h2>Basic Example</h2>
        <pre style={{ background: '#f5f5f5', padding: '10px', borderRadius: '5px' }}>
{`function useWindowWidth() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return width;
}`}
        </pre>
      </section>

      <section style={{ marginBottom: '20px' }}>
        <h2>Using the Custom Hook</h2>
        <p>
          You can now use <code>useWindowWidth</code> inside any functional component:
        </p>
        <pre style={{ background: '#f5f5f5', padding: '10px', borderRadius: '5px' }}>
{`function MyComponent() {
  const width = useWindowWidth();
  return <p>Window width: {width}px</p>;
}`}
        </pre>

        <div style={{ marginTop: '10px', padding: '10px', backgroundColor: '#e8f5e9', borderRadius: '6px' }}>
          Window width: {width}px
        </div>
      </section>

      <section style={{ marginTop: '20px' }}>
        <h2>Key Points</h2>
        <ul>
          <li>Custom hooks let you reuse logic between components.</li>
          <li>They always start with <code>use</code>.</li>
          <li>Can call other hooks (state, effect, context, etc.) inside them.</li>
          <li>Keep your components clean and focused on UI.</li>
        </ul>
      </section>

      <section style={{ marginTop: '20px' }}>
        <h2>Summary</h2>
        <p>
          Custom hooks are a powerful way to share stateful logic across multiple React components while keeping code organized and maintainable.
        </p>
      </section>
    </div>
  );
}
