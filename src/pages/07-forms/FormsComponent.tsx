import React, { useState } from 'react'

export default function FormsComponent() {
 const [formData, setFormData] = useState({ name: '', email: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Name: ${formData.name}, Email: ${formData.email}`);
  };

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', lineHeight: '1.6', padding: '20px', maxWidth: '800px', margin: 'auto' }}>
      <h1 style={{ color: '#4A90E2' }}>React Forms</h1>

      <section style={{ marginBottom: '20px' }}>
        <h2>What are Forms in React?</h2>
        <p>
          Forms in React are used to collect user input. React handles form inputs using <strong>controlled components</strong>, 
          meaning the form data is stored in the component's state.
        </p>
      </section>

      <section style={{ marginBottom: '20px' }}>
        <h2>Basic Example</h2>
        <p>Example of a controlled form with name and email:</p>
        <pre style={{ background: '#f5f5f5', padding: '10px', borderRadius: '5px' }}>
{`const [formData, setFormData] = useState({ name: '', email: '' });

const handleChange = (e) => {
  const { name, value } = e.target;
  setFormData(prev => ({ ...prev, [name]: value }));
};

const handleSubmit = (e) => {
  e.preventDefault();
  alert(\`Name: \${formData.name}, Email: \${formData.email}\`);
};`}
        </pre>
      </section>

      <section style={{ marginBottom: '20px' }}>
        <h2>Render the Form</h2>
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            value={formData.name}
            onChange={handleChange}
            style={{ padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}
          />
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
            style={{ padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}
          />
          <button
            type="submit"
            style={{ padding: '10px', backgroundColor: '#4A90E2', color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer' }}
          >
            Submit
          </button>
        </form>
      </section>

      <section style={{ marginTop: '20px' }}>
        <h2>Key Points</h2>
        <ul>
          <li>Controlled components store form input values in state.</li>
          <li>Form submission is handled by preventing default behavior and using state values.</li>
          <li>Input changes are tracked via <code>onChange</code> events.</li>
          <li>Validation can be added inside the submit handler or on change.</li>
        </ul>
      </section>

      <section style={{ marginTop: '20px' }}>
        <h2>Summary</h2>
        <p>
          React forms are powerful and flexible. Controlled components ensure the UI reflects the state, 
          making it easy to validate, submit, and manipulate form data.
        </p>
      </section>
    </div>
  );
}
