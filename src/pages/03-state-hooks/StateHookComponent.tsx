import React from 'react'

export default function StateHookComponent() {
return (
    <div style={{ fontFamily: 'Arial, sans-serif', lineHeight: '1.6', padding: '20px', maxWidth: '800px', margin: 'auto' }}>
      <h1 style={{ color: '#4A90E2' }}>React State Hook (useState)</h1>

      <section style={{ marginBottom: '20px' }}>
        <h2>What is useState?</h2>
        <p>
          <strong>useState</strong> is a Hook that lets you add state to functional components.
          Previously, only class components could have state. Now, functional components can manage state as well.
        </p>
      </section>

      <section style={{ marginBottom: '20px' }}>
        <h2>Basic Example</h2>
        <p>Example of using <code>useState</code> to manage a counter:</p>
        <pre style={{ background: '#f5f5f5', padding: '10px', borderRadius: '5px' }}>
{`import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

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
          <li><strong>useState</strong> returns an array with two elements: the current state and a setter function.</li>
          <li>State can be any type: number, string, object, array, etc.</li>
          <li>Calling the setter function re-renders the component with the new state.</li>
          <li>Multiple <code>useState</code> calls can be used to manage multiple independent state variables.</li>
        </ul>
      </section>

      <section style={{ marginTop: '20px' }}>
        <h2>Example with Multiple State Variables</h2>
        <pre style={{ background: '#f5f5f5', padding: '10px', borderRadius: '5px' }}>
{`function UserForm() {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');

  return (
    <div>
      <input value={name} onChange={e => setName(e.target.value)} placeholder="Name" />
      <input value={age} onChange={e => setAge(e.target.value)} placeholder="Age" />
      <p>{name} is {age} years old.</p>
    </div>
  );
}`}
        </pre>
      </section>

      <section style={{ marginTop: '20px' }}>
        <h2>Summary</h2>
        <p>
          The <strong>useState</strong> Hook is fundamental in React functional components.
          It allows you to manage and update state without using class components, making your code simpler and easier to read.
        </p>
      </section>
    </div>
  );
}
