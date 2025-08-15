import React, { useEffect, useState } from 'react'

export default function ErrorHandlingComponent() {
 const [data, setData] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        // Simulating API call
        const response = await new Promise<string>((resolve, reject) => {
          setTimeout(() => {
            Math.random() > 0.5 ? resolve('Fetched data successfully!') : reject('Failed to fetch data.');
          }, 1000);
        });
        setData(response);
        setError(null);
      } catch (err) {
        setError(err as string);
        setData(null);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', lineHeight: '1.6', padding: '20px', maxWidth: '800px', margin: 'auto' }}>
      <h1 style={{ color: '#4A90E2' }}>Error Handling in Hooks</h1>

      <section style={{ marginBottom: '20px' }}>
        <h2>Why Handle Errors in Hooks?</h2>
        <p>
          Hooks like <code>useEffect</code> often involve async operations like API calls. Proper error handling ensures the UI can gracefully handle failures.
        </p>
      </section>

      <section style={{ marginBottom: '20px' }}>
        <h2>Example</h2>
        <pre style={{ background: '#f5f5f5', padding: '10px', borderRadius: '5px' }}>
{`useEffect(() => {
  const fetchData = async () => {
    try {
      const response = await fetch('/api/data');
      setData(await response.json());
    } catch (err) {
      setError('Failed to fetch data');
    }
  };
  fetchData();
}, []);`}
        </pre>
      </section>

      <section style={{ marginBottom: '20px' }}>
        <h2>Try it Out</h2>
        <div style={{ marginTop: '10px', padding: '15px', backgroundColor: '#f3f3f3', borderRadius: '6px' }}>
          {loading && <p>Loading...</p>}
          {error && <p style={{ color: 'red' }}>Error: {error}</p>}
          {data && <p style={{ color: 'green' }}>{data}</p>}
        </div>
      </section>

      <section style={{ marginTop: '20px' }}>
        <h2>Key Points</h2>
        <ul>
          <li>Always handle errors in async hooks to prevent unhandled promise rejections.</li>
          <li>Use <code>try/catch</code> blocks inside async functions.</li>
          <li>Provide meaningful feedback to users when errors occur.</li>
          <li>Reset state properly to avoid stale data or inconsistent UI.</li>
        </ul>
      </section>

      <section style={{ marginTop: '20px' }}>
        <h2>Summary</h2>
        <p>
          Proper error handling in hooks is essential for building robust React applications. 
          Always anticipate failures and update state to reflect loading, success, or error conditions.
        </p>
      </section>
    </div>
  );
}
