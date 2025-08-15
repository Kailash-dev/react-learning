import React, { useState } from 'react'

export default function LiftingStateUpComponent() {
  const [temperature, setTemperature] = useState('');

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', lineHeight: '1.6', padding: '20px', maxWidth: '800px', margin: 'auto' }}>
      <h1 style={{ color: '#4A90E2' }}>Lifting State Up</h1>

      <section style={{ marginBottom: '20px' }}>
        <h2>What is Lifting State Up?</h2>
        <p>
          "Lifting State Up" is a React pattern where state is moved to the closest common ancestor of components that need it.
          This allows multiple components to share and synchronize state.
        </p>
      </section>

      <section style={{ marginBottom: '20px' }}>
        <h2>Example Scenario</h2>
        <p>Two input components need to display the same temperature in Celsius and Fahrenheit:</p>
        <pre style={{ background: '#f5f5f5', padding: '10px', borderRadius: '5px' }}>
{`function TemperatureInput({ label, value, onChange }) {
  return (
    <div>
      <label>{label}: </label>
      <input value={value} onChange={e => onChange(e.target.value)} />
    </div>
  );
}

function Calculator() {
  const [temperature, setTemperature] = useState('');

  const handleTemperatureChange = (value) => setTemperature(value);

  return (
    <div>
      <TemperatureInput label="Celsius" value={temperature} onChange={handleTemperatureChange} />
      <TemperatureInput label="Fahrenheit" value={temperature && (temperature * 9/5 + 32).toFixed(2)} onChange={handleTemperatureChange} />
    </div>
  );
}`}
        </pre>
      </section>

      <section style={{ marginBottom: '20px' }}>
        <h2>Key Points</h2>
        <ul>
          <li>State is lifted to the closest common ancestor to share it between child components.</li>
          <li>Child components receive the state via props.</li>
          <li>State updates in the parent propagate to all children that depend on it.</li>
          <li>This pattern avoids duplication of state and ensures consistency.</li>
        </ul>
      </section>

      <section style={{ marginTop: '20px' }}>
        <h2>Summary</h2>
        <p>
          Lifting state up is an essential React pattern for sharing data between components.
          By keeping the source of truth in a parent component, multiple children can stay synchronized.
        </p>
      </section>
    </div>
  );
}
