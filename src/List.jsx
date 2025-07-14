import { use, useEffect, useState } from 'react';

export const List = () => {
  const data = use(
    new Promise((resolve) => {
      setTimeout(() => {
        resolve([
          { name: 'Javascript', skills: 90 },
          { name: 'TypeScript', skills: 60 },
          { name: 'React', skills: 99 },
        ]);
      }, 2000);
    })
  );

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
};
