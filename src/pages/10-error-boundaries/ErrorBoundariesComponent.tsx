import React, { Component, ReactNode } from 'react'

class ErrorBoundary extends Component<{ children: ReactNode }, { hasError: boolean }> {
  constructor(props: { children: ReactNode }) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true };
  }

  componentDidCatch(error: Error, info: any) {
    console.error('Error caught by Error Boundary:', error, info);
  }

  render() {
    if (this.state.hasError) {
      return <h2>Something went wrong. Please try again later.</h2>;
    }
    return this.props.children;
  }
}
export default function ErrorBoundariesComponent() {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', lineHeight: '1.6', padding: '20px', maxWidth: '800px', margin: 'auto' }}>
      <h1 style={{ color: '#4A90E2' }}>React Error Boundaries</h1>

      <section style={{ marginBottom: '20px' }}>
        <h2>What are Error Boundaries?</h2>
        <p>
          Error boundaries are React components that catch JavaScript errors anywhere in their child component tree, 
          log those errors, and display a fallback UI instead of crashing the entire app.
        </p>
      </section>

      <section style={{ marginBottom: '20px' }}>
        <h2>Basic Example</h2>
        <p>Wrapping a component with an error boundary:</p>
        <pre style={{ background: '#f5f5f5', padding: '10px', borderRadius: '5px' }}>
{`<ErrorBoundary>
  <MyComponent />
</ErrorBoundary>`}
        </pre>
        <p>Now, if <code>MyComponent</code> throws an error, the fallback UI is shown instead of crashing the app.</p>
      </section>

      <section style={{ marginBottom: '20px' }}>
        <h2>Key Points</h2>
        <ul>
          <li>Error boundaries catch errors during rendering, in lifecycle methods, and in constructors of child components.</li>
          <li>They do NOT catch errors inside event handlers.</li>
          <li>Defined using class components only (functional components cannot be error boundaries directly).</li>
          <li>Always include a fallback UI to display a user-friendly message.</li>
        </ul>
      </section>

      <section style={{ marginTop: '20px' }}>
        <h2>Summary</h2>
        <p>
          Error boundaries improve the robustness of React applications by preventing an entire app from crashing due to errors 
          in specific components. They are essential for handling unexpected errors gracefully.
        </p>
      </section>
    </div>
  );
}
