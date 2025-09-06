import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0); // Initial count set to 0

  return (
    <div style={{ textAlign: 'center', margin: '20px' }}>
      <h2>Counter Application</h2>
      <p>Current Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)} style={{ margin: '0 10px' }}>
        Decrement
      </button>
      <button onClick={() => setCount(0)}>Reset</button>
    </div>
  );
}

export default Counter;