import React, { useCallback, useMemo, useState } from 'react'
// A child component to demonstrate React.memo
const ExpensiveComponent = React.memo(({ compute, value }: { compute: (num: number) => number; value: number }) => {
  console.log('ExpensiveComponent rendered');
  return <p>Computed value: {compute(value)}</p>;
});

export default function MemorizationComponent() {
  const [count, setCount] = useState(0);
  const [other, setOther] = useState(0);

  // useCallback to memoize the function
  const compute = useCallback((num: number) => {
    console.log('Computing...');
    let result = 0;
    for (let i = 0; i < 1000000; i++) result += num;
    return result;
  }, []);

  // useMemo to memoize expensive calculation
  const memoizedValue = useMemo(() => compute(count), [count, compute]);

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', lineHeight: '1.6', padding: '20px', maxWidth: '800px', margin: 'auto' }}>
      <h1 style={{ color: '#4A90E2' }}>React Memoization</h1>

      <section style={{ marginBottom: '20px' }}>
        <h2>What is Memoization?</h2>
        <p>
          Memoization in React is a performance optimization technique. It prevents unnecessary re-rendering of components or re-computation of values.
        </p>
      </section>

      <section style={{ marginBottom: '20px' }}>
        <h2>React.memo</h2>
        <p>
          <strong>React.memo</strong> wraps a component and only re-renders it if its props change.
        </p>
        <p>Example:</p>
        <pre style={{ background: '#f5f5f5', padding: '10px', borderRadius: '5px' }}>
{`const MyComponent = React.memo(({ value }) => {
  return <p>{value}</p>;
});`}
        </pre>
      </section>

      <section style={{ marginBottom: '20px' }}>
        <h2>useMemo</h2>
        <p>
          <strong>useMemo</strong> memoizes a computed value and recomputes it only when dependencies change.
        </p>
        <p>Example:</p>
        <pre style={{ background: '#f5f5f5', padding: '10px', borderRadius: '5px' }}>
{`const memoizedValue = useMemo(() => expensiveComputation(count), [count]);`}
        </pre>
      </section>

      <section style={{ marginBottom: '20px' }}>
        <h2>useCallback</h2>
        <p>
          <strong>useCallback</strong> memoizes a function so that it is not recreated on every render.
        </p>
        <p>Example:</p>
        <pre style={{ background: '#f5f5f5', padding: '10px', borderRadius: '5px' }}>
{`const memoizedCallback = useCallback(() => {
  doSomething(count);
}, [count]);`}
        </pre>
      </section>

      <section style={{ marginTop: '20px' }}>
        <h2>Summary</h2>
        <p>
          Memoization improves performance by avoiding unnecessary re-renders or recalculations.
          Use <code>React.memo</code> for components, <code>useMemo</code> for expensive computations, and <code>useCallback</code> for functions.
        </p>
      </section>
    </div>
  );
}
