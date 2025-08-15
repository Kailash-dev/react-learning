import React from 'react'
function withLogger<P extends object>(WrappedComponent: React.ComponentType<P>) {
  // Wrap in React.FC<P> for proper type inference
  const ComponentWithLogger: React.FC<P> = (props) => {
    console.log('Rendering component with props:', props);
    return <WrappedComponent {...props} />;
  };

  // Optional: set displayName for DevTools
  ComponentWithLogger.displayName = `withLogger(${WrappedComponent.displayName || WrappedComponent.name || 'Component'})`;

  return ComponentWithLogger;
}

// Sample component to wrap
const Button = ({ label }: { label: string }) => {
  return <button>{label}</button>;
};

const ButtonWithLogger = withLogger(Button);

export default function HighOrderComponent() {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', lineHeight: '1.6', padding: '20px', maxWidth: '800px', margin: 'auto' }}>
      <h1 style={{ color: '#4A90E2' }}>Higher-Order Components (HOC)</h1>

      <section style={{ marginBottom: '20px' }}>
        <h2>What is a Higher-Order Component?</h2>
        <p>
          A Higher-Order Component is a function that takes a component and returns a new component. 
          HOCs are used to add reusable behavior to components without modifying their original code.
        </p>
      </section>

      <section style={{ marginBottom: '20px' }}>
        <h2>Basic Example</h2>
        <pre style={{ background: '#f5f5f5', padding: '10px', borderRadius: '5px' }}>
{`// HOC definition
function withLogger(WrappedComponent) {
  return (props) => {
    console.log('Rendering component with props:', props);
    return <WrappedComponent {...props} />;
  };
}

// Usage
const ButtonWithLogger = withLogger(Button);`}
        </pre>
        <p>
          Now, <code>ButtonWithLogger</code> logs props to the console whenever it renders, without changing the original <code>Button</code> component.
        </p>
      </section>

      <section style={{ marginBottom: '20px' }}>
        <h2>Key Points</h2>
        <ul>
          <li>HOCs are functions that wrap components and return enhanced components.</li>
          <li>They allow code reuse, logic abstraction, and cross-cutting concerns.</li>
          <li>Common use cases: logging, authentication, theming, and data fetching.</li>
          <li>HOCs should not mutate the original component; always return a new one.</li>
        </ul>
      </section>

      <section style={{ marginTop: '20px' }}>
        <h2>Summary</h2>
        <p>
          Higher-Order Components are a powerful React pattern for reusing logic across components. 
          They enhance components without modifying their original implementation.
        </p>
      </section>

      <section style={{ marginTop: '20px' }}>
        <h2>Try it Out</h2>
        <ButtonWithLogger label="Click Me" />
      </section>
    </div>
  );
}
