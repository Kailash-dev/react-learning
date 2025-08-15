import React, { createContext, useState } from 'react'
const ThemeContext = createContext<{ theme: string; toggleTheme: () => void } | undefined>(undefined);


export default function ContextApiComponent() {
     const [theme, setTheme] = useState('light');
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', lineHeight: '1.6', padding: '20px', maxWidth: '800px', margin: 'auto' }}>
      <h1 style={{ color: '#4A90E2' }}>React Context API</h1>

      <section style={{ marginBottom: '20px' }}>
        <h2>What is Context API?</h2>
        <p>
          The <strong>Context API</strong> in React allows you to share data between components without passing props manually at every level.
          It is useful for global state like themes, user data, or settings.
        </p>
      </section>

      <section style={{ marginBottom: '20px' }}>
        <h2>Basic Example</h2>
        <p>Creating a simple theme context:</p>
        <pre style={{ background: '#f5f5f5', padding: '10px', borderRadius: '5px' }}>
{`import React, { createContext, useContext, useState } from 'react';

const ThemeContext = createContext();

function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('light');
  const toggleTheme = () => setTheme(prev => (prev === 'light' ? 'dark' : 'light'));

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

function ThemedButton() {
  const context = useContext(ThemeContext);
  return <button onClick={context.toggleTheme}>Current theme: {context.theme}</button>;
}`}
        </pre>
      </section>

      <section style={{ marginBottom: '20px' }}>
        <h2>Key Points</h2>
        <ul>
          <li>Use <code>createContext</code> to create a context object.</li>
          <li>Wrap the component tree with <code>Context.Provider</code> and pass a value.</li>
          <li>Access context in child components using <code>useContext</code>.</li>
          <li>Useful for sharing global state like theme, language, authentication, etc.</li>
        </ul>
      </section>

      <section style={{ marginTop: '20px' }}>
        <h2>Summary</h2>
        <p>
          The <strong>Context API</strong> provides a way to pass data through the component tree without
          prop drilling. Combined with hooks, it makes managing global state in functional components straightforward.
        </p>
      </section>
    </div>
  );
}
