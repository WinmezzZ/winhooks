import { useAsyncEffect } from 'winhooks';
import { useState } from 'react';

const getData = () => {
  return Promise.resolve([{ name: '张三', id: 0 }]);
};

export default () => {
  const [list, setList] = useState([]);

  useAsyncEffect(async () => {
    const data = await getData();

    setList(data);
  });

  return (
    <ul>
      {list.map(l => (
        <li key={l.id}>
          <span>name：</span>
          <span>{l.name}</span>
        </li>
      ))}
    </ul>
  );
};
