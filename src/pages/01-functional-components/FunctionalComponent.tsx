import React from 'react';

const FunctionalComponentLearning = () => {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', lineHeight: '1.6', padding: '20px', maxWidth: '800px', margin: 'auto' }}>
      <h1 style={{ color: '#4A90E2' }}>React Functional Components</h1>

      <section style={{ marginBottom: '20px' }}>
        <h2>What is a Functional Component?</h2>
        <p>
          A <strong>Functional Component</strong> in React is a JavaScript function that returns JSX to render UI. 
          They are simple, easy to read, and encourage reusable code.
        </p>
        <p>Example of a functional component:</p>
        <pre style={{ background: '#f5f5f5', padding: '10px', borderRadius: '5px' }}>
          {`function Greeting(props) {
  return <h2>Hello, {props.name}!</h2>;
}

// Or using ES6 arrow function:
const Greeting = ({ name }) => <h2>Hello, {name}!</h2>;`}
        </pre>
      </section>

      <section style={{ marginBottom: '20px' }}>
        <h2>Key Features of Functional Components</h2>
        <ul>
          <li>Stateless (before React Hooks) — mostly used for UI presentation.</li>
          <li>Lightweight and simpler syntax compared to class components.</li>
          <li>Can use <strong>React Hooks</strong> (like <code>useState</code>, <code>useEffect</code>) to manage state and side effects.</li>
          <li>No <code>this</code> keyword needed.</li>
        </ul>
      </section>

      <section>
        <h2>Functional vs Class Components</h2>
        <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
          <thead>
            <tr>
              <th style={{ borderBottom: '2px solid #4A90E2', padding: '8px' }}>Aspect</th>
              <th style={{ borderBottom: '2px solid #4A90E2', padding: '8px' }}>Functional Component</th>
              <th style={{ borderBottom: '2px solid #4A90E2', padding: '8px' }}>Class Component</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ padding: '8px', borderBottom: '1px solid #ccc' }}>Syntax</td>
              <td style={{ padding: '8px', borderBottom: '1px solid #ccc' }}>JavaScript function</td>
              <td style={{ padding: '8px', borderBottom: '1px solid #ccc' }}>ES6 class extends <code>React.Component</code></td>
            </tr>
            <tr>
              <td style={{ padding: '8px', borderBottom: '1px solid #ccc' }}>State Management</td>
              <td style={{ padding: '8px', borderBottom: '1px solid #ccc' }}>Via Hooks (<code>useState</code>)</td>
              <td style={{ padding: '8px', borderBottom: '1px solid #ccc' }}>Via <code>this.state</code> and <code>this.setState</code></td>
            </tr>
            <tr>
              <td style={{ padding: '8px', borderBottom: '1px solid #ccc' }}>Lifecycle Methods</td>
              <td style={{ padding: '8px', borderBottom: '1px solid #ccc' }}>Via Hooks (<code>useEffect</code>)</td>
              <td style={{ padding: '8px', borderBottom: '1px solid #ccc' }}>Built-in lifecycle methods like <code>componentDidMount</code>, <code>componentDidUpdate</code>, <code>componentWillUnmount</code></td>
            </tr>
            <tr>
              <td style={{ padding: '8px', borderBottom: '1px solid #ccc' }}>this Keyword</td>
              <td style={{ padding: '8px', borderBottom: '1px solid #ccc' }}>Not required</td>
              <td style={{ padding: '8px', borderBottom: '1px solid #ccc' }}>Required to access props and state</td>
            </tr>
            <tr>
              <td style={{ padding: '8px' }}>Performance</td>
              <td style={{ padding: '8px' }}>Generally faster and simpler</td>
              <td style={{ padding: '8px' }}>Slightly heavier due to extra features</td>
            </tr>
          </tbody>
        </table>
      </section>

      <section style={{ marginTop: '20px' }}>
        <h2>Summary</h2>
        <p>
          Functional components are now the <strong>preferred way</strong> of writing React components due to simplicity, readability, and full support for Hooks.
          Class components are still valid, but they are mostly used in older codebases.
        </p>
      </section>
    </div>
  );
};

export default FunctionalComponentLearning;
