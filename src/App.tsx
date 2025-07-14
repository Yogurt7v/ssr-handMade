import { Suspense, useState } from 'react';
import { List } from './List';

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <p>Count: {count}</p>
      <button onClick={() => setCount((prev) => prev + 1)}>Click</button>

      <Suspense fallback="Loading">
        <List />
      </Suspense>
    </>
  );
}
