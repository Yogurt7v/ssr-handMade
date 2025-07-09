import { useState } from 'react';

export default function App() {
  const data = [
    { name: 'Javascript', skills: 90 },
    { name: 'TypeScript', skills: 60 },
    { name: 'React', skills: 99 },
  ];
  const [count, setCount] = useState(0);

  return (
    <ul>
      {data.map((item, index) => (
        <li key={index}>
          <p>{item.name}</p>
          <p>{item.skills}</p>
        </li>
      ))}
    </ul>
  );
}
