import React from 'react'

export default function FragmentComponent() {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', lineHeight: '1.6', padding: '20px', maxWidth: '800px', margin: 'auto' }}>
      <h1 style={{ color: '#4A90E2' }}>React Fragments</h1>

      <section style={{ marginBottom: '20px' }}>
        <h2>What are Fragments?</h2>
        <p>
          React Fragments allow you to group a list of children elements without adding extra nodes to the DOM.
          They are useful when you want multiple elements to be returned from a component without a wrapper div.
        </p>
      </section>

      <section style={{ marginBottom: '20px' }}>
        <h2>Basic Example</h2>
        <p>Using the short syntax <code>&lt;&gt;&lt;/&gt;</code>:</p>
        <pre style={{ background: '#f5f5f5', padding: '10px', borderRadius: '5px' }}>
{`function Table() {
  return (
    <>
      <tr>
        <td>Row 1, Cell 1</td>
        <td>Row 1, Cell 2</td>
      </tr>
      <tr>
        <td>Row 2, Cell 1</td>
        <td>Row 2, Cell 2</td>
      </tr>
    </>
  );
}`}
        </pre>
      </section>

      <section style={{ marginBottom: '20px' }}>
        <h2>Alternative Syntax</h2>
        <p>Using <code>&lt;React.Fragment&gt;</code>:</p>
        <pre style={{ background: '#f5f5f5', padding: '10px', borderRadius: '5px' }}>
{`function Table() {
  return (
    <React.Fragment>
      <tr>
        <td>Row 1, Cell 1</td>
        <td>Row 1, Cell 2</td>
      </tr>
      <tr>
        <td>Row 2, Cell 1</td>
        <td>Row 2, Cell 2</td>
      </tr>
    </React.Fragment>
  );
}`}
        </pre>
      </section>

      <section style={{ marginTop: '20px' }}>
        <h2>Key Points</h2>
        <ul>
          <li>Fragments do not create additional DOM nodes.</li>
          <li>Useful for returning multiple children from a component.</li>
          <li>Short syntax <code>&lt;&gt;&lt;/&gt;</code> is cleaner, but cannot accept <code>key</code> or <code>props</code>.</li>
          <li><code>&lt;React.Fragment&gt;</code> syntax can accept <code>key</code> for lists.</li>
        </ul>
      </section>

      <section style={{ marginTop: '20px' }}>
        <h2>Summary</h2>
        <p>
          React Fragments help keep the DOM clean by avoiding unnecessary wrapper elements while allowing multiple elements to be returned from a component.
        </p>
      </section>
    </div>
  );
}
