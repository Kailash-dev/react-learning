// import React, { useState, Profiler, ProfilerOnRenderCallback } from 'react';

// export default function ProfileComponent() {
//   const [count, setCount] = useState(0);

//   // Profiler callback with 8 parameters (React 18)
//   const onRenderCallback: ProfilerOnRenderCallback = (
//     id,
//     phase,
//     actualDuration,
//     baseDuration,
//     startTime,
//     commitTime,
//     interactions,
//     layoutEffectsDuration // optional 8th param
//   ) => {
//     console.log(`Profiler [${id}] (${phase})`);
//     console.log(`Actual duration: ${actualDuration}`);
//     console.log(`Base duration: ${baseDuration}`);
//     console.log(`Start time: ${startTime}`);
//     console.log(`Commit time: ${commitTime}`);
//     console.log('Interactions:', interactions);
//     if (layoutEffectsDuration !== undefined) {
//       console.log('Layout effects duration:', layoutEffectsDuration);
//     }
//   };

//   return (
//     <div style={{ fontFamily: 'Arial, sans-serif', lineHeight: 1.6, padding: 20, maxWidth: 800, margin: 'auto' }}>
//       <h1 style={{ color: '#4A90E2' }}>React Profiler API</h1>

//       <section style={{ marginBottom: 20 }}>
//         <h2>What is Profiler?</h2>
//         <p>
//           The <strong>Profiler</strong> API measures the performance of React components, tracking render durations
//           and other metrics. It helps identify performance bottlenecks and optimize slow components.
//         </p>
//       </section>

//       <section style={{ marginBottom: 20 }}>
//         <h2>Basic Example</h2>
//         <pre style={{ background: '#f5f5f5', padding: 10, borderRadius: 5 }}>
// {`<Profiler id="Counter" onRender={onRenderCallback}>
//   <Counter />
// </Profiler>`}
//         </pre>
//         <p>The <code>onRender</code> callback logs render performance details to the console.</p>
//       </section>

//       <section style={{ marginBottom: 20 }}>
//         <h2>Try it Out</h2>
//         <Profiler id="Counter" onRender={onRenderCallback}>
//           <div style={{ marginTop: 10 }}>
//             <p>Count: {count}</p>
//             <button onClick={() => setCount(count + 1)}>Increment</button>
//           </div>
//         </Profiler>
//       </section>

//       <section style={{ marginTop: 20 }}>
//         <h2>Key Points</h2>
//         <ul>
//           <li>Profiler can wrap any component to measure its rendering performance.</li>
//           <li>Callback provides metrics like <code>actualDuration</code> and <code>commitTime</code>.</li>
//           <li>Helps identify performance bottlenecks in large applications.</li>
//         </ul>
//       </section>

//       <section style={{ marginTop: 20 }}>
//         <h2>Summary</h2>
//         <p>
//           React's Profiler API is a built-in performance monitoring tool that helps developers optimize render times
//           and improve app performance.
//         </p>
//       </section>
//     </div>
//   );
// }



import React from 'react'

export default function ProfileComponent() {
  return (
    <div>
      
    </div>
  )
}
