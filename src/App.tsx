import { useState } from 'react';

export default function App({ data }) {
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

const data = [
  { name: 'Javascript', skills: 90 },
  { name: 'TypeScript', skills: 60 },
  { name: 'React', skills: 99 },
];

// имитируем запрос на сервер
App.getServerSideProps = () =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve(data);
    }, 1000);
  });
