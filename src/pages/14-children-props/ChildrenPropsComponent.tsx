import React from 'react'

export default function ChildrenPropsComponent() {
return (
    <div style={{ fontFamily: 'Arial, sans-serif', lineHeight: '1.6', padding: '20px', maxWidth: '800px', margin: 'auto' }}>
      <h1 style={{ color: '#4A90E2' }}>React Children Props</h1>

      <section style={{ marginBottom: '20px' }}>
        <h2>What are Children Props?</h2>
        <p>
          In React, the <code>children</code> prop allows components to pass nested elements directly into the component’s output. 
          This makes components flexible and reusable.
        </p>
      </section>

      <section style={{ marginBottom: '20px' }}>
        <h2>Basic Example</h2>
        <p>Passing JSX as children to a component:</p>
        <pre style={{ background: '#f5f5f5', padding: '10px', borderRadius: '5px' }}>
{`function Card({ children }) {
  return (
    <div style={{ border: '1px solid #ccc', padding: '10px', borderRadius: '5px' }}>
      {children}
    </div>
  );
}

function App() {
  return (
    <Card>
      <h2>Title inside Card</h2>
      <p>This content is passed as children.</p>
    </Card>
  );
}`}
        </pre>
      </section>

      <section style={{ marginBottom: '20px' }}>
        <h2>Key Points</h2>
        <ul>
          <li><code>children</code> allows components to render nested content dynamically.</li>
          <li>Children can be JSX elements, text, or even other components.</li>
          <li>Enables highly reusable and flexible components like wrappers, layouts, and modals.</li>
          <li>Access children via <code>props.children</code> in class components or directly in functional components.</li>
        </ul>
      </section>

      <section style={{ marginTop: '20px' }}>
        <h2>Summary</h2>
        <p>
          The <code>children</code> prop is a core concept in React that enhances component reusability by allowing nested content to be passed directly.
        </p>
      </section>
    </div>
  );
}
