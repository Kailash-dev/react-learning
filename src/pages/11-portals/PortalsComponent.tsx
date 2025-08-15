import React from 'react'

export default function PortalsComponent() {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', lineHeight: '1.6', padding: '20px', maxWidth: '800px', margin: 'auto' }}>
      <h1 style={{ color: '#4A90E2' }}>React Portals</h1>

      <section style={{ marginBottom: '20px' }}>
        <h2>What are Portals?</h2>
        <p>
          React Portals provide a way to render children into a DOM node that exists outside the DOM hierarchy of the parent component.
          This is useful for modals, tooltips, or any element that should visually break out of its parent container.
        </p>
      </section>

      <section style={{ marginBottom: '20px' }}>
        <h2>Basic Example</h2>
        <p>Rendering a modal using a portal:</p>
        <pre style={{ background: '#f5f5f5', padding: '10px', borderRadius: '5px' }}>
{`import React from 'react';
import ReactDOM from 'react-dom';

function Modal({ children }) {
  return ReactDOM.createPortal(
    <div style={{
      position: 'fixed',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      background: '#fff',
      padding: '20px',
      boxShadow: '0 4px 12px rgba(0,0,0,0.3)',
      borderRadius: '8px'
    }}>
      {children}
    </div>,
    document.getElementById('modal-root') // DOM node outside parent hierarchy
  );
}`}
        </pre>
      </section>

      <section style={{ marginBottom: '20px' }}>
        <h2>Key Points</h2>
        <ul>
          <li>Portals allow rendering outside the parent component's DOM hierarchy.</li>
          <li>They preserve React’s event bubbling behavior.</li>
          <li>Commonly used for modals, tooltips, dropdowns, and overlays.</li>
          <li>Requires a target DOM node, e.g., <code>&lt;div id="modal-root"&gt;&lt;/div&gt;</code> in your HTML.</li>
        </ul>
      </section>

      <section style={{ marginTop: '20px' }}>
        <h2>Summary</h2>
        <p>
          React Portals provide flexibility in rendering UI elements outside the normal DOM tree, 
          making them essential for components like modals or floating tooltips without breaking layout constraints.
        </p>
      </section>
    </div>
  );
}
