import React from 'react';

const ClassComponents = () => {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', lineHeight: '1.6', padding: '20px', maxWidth: '800px', margin: 'auto' }}>
      <h1 style={{ color: '#4A90E2' }}>React Class Components</h1>

      <section style={{ marginBottom: '20px' }}>
        <h2>What is a Class Component?</h2>
        <p>
          A <strong>Class Component</strong> in React is an ES6 class that extends <code>React.Component</code>.
          It can have its own state and lifecycle methods.
        </p>
        <p>Example of a class component:</p>
        <pre style={{ background: '#f5f5f5', padding: '10px', borderRadius: '5px' }}>
          {`class Greeting extends React.Component {
  render() {
    return <h2>Hello, {this.props.name}!</h2>;
  }
}`}
        </pre>
      </section>

      <section style={{ marginBottom: '20px' }}>
        <h2>Key Features of Class Components</h2>
        <ul>
          <li>State is managed using <code>this.state</code> and updated with <code>this.setState()</code>.</li>
          <li>Can use lifecycle methods like <code>componentDidMount</code>, <code>componentDidUpdate</code>, <code>componentWillUnmount</code>.</li>
          <li>Requires <code>this</code> keyword to access props and state.</li>
        </ul>
      </section>

      <section style={{ marginTop: '20px' }}>
        <h2>Summary</h2>
        <p>
          Class components were traditionally used for stateful logic and lifecycle methods.
          With hooks, functional components can now do everything class components can, and are the preferred approach.
        </p>
      </section>
    </div>
  );
};

export default ClassComponents;
