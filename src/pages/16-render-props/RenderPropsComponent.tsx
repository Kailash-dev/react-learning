import React, { useState } from 'react'

const MouseTracker = ({ render }: { render: (x: number, y: number) => React.ReactNode }) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (event: React.MouseEvent) => {
    setPosition({ x: event.clientX, y: event.clientY });
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      style={{ border: '1px solid #ccc', height: '200px', marginTop: '10px', padding: '10px' }}
    >
      {render(position.x, position.y)}
    </div>
  );
};

export default function RenderPropsComponent() {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', lineHeight: '1.6', padding: '20px', maxWidth: '800px', margin: 'auto' }}>
      <h1 style={{ color: '#4A90E2' }}>Render Props</h1>

      <section style={{ marginBottom: '20px' }}>
        <h2>What are Render Props?</h2>
        <p>
          Render Props is a technique in React for sharing code between components using a prop whose value is a function. 
          This function returns JSX to be rendered, giving flexibility in rendering logic.
        </p>
      </section>

      <section style={{ marginBottom: '20px' }}>
        <h2>Basic Example</h2>
        <pre style={{ background: '#f5f5f5', padding: '10px', borderRadius: '5px' }}>
{`<MouseTracker render={(x, y) => (
  <p>The mouse position is ({x}, {y})</p>
)} />`}
        </pre>
        <p>
          The <code>MouseTracker</code> component tracks the mouse position and calls the render function prop to display it.
        </p>
      </section>

      <section style={{ marginBottom: '20px' }}>
        <h2>Key Points</h2>
        <ul>
          <li>Render props allow dynamic rendering of child content based on component state or logic.</li>
          <li>It enables sharing behavior between components without inheritance.</li>
          <li>The prop name is often called <code>render</code> or <code>children</code> as a function.</li>
          <li>Great for reusable logic like mouse position, form validation, or data fetching.</li>
        </ul>
      </section>

      <section style={{ marginTop: '20px' }}>
        <h2>Summary</h2>
        <p>
          Render Props is a powerful pattern in React that allows components to delegate rendering logic to a function, 
          making components flexible and reusable.
        </p>
      </section>

      <section style={{ marginTop: '20px' }}>
        <h2>Try it Out</h2>
        <MouseTracker render={(x, y) => <p>The mouse position is ({x}, {y})</p>} />
      </section>
    </div>
  );
}
