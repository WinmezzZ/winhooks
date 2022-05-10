import { useDebounce, useAsyncEffect } from 'winhooks';
import { useState } from 'react';
import { Input, Loading } from 'ultra-design';

async function getUserList(keyword = '') {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(
        new Array(10)
          .fill()
          .map((_, index) => ({ name: `Name ${index}`, id: index }))
          .filter(item => item.name.includes(keyword)),
      );
    }, 500);
  });
}

export default () => {
  const [keyword, setKeyword] = useState('');
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(false);
  const debouncedKeyword = useDebounce(keyword, 300);

  useAsyncEffect(async () => {
    setLoading(true);
    const data = await getUserList(keyword);

    setLoading(false);
    setList(data);
  }, [debouncedKeyword]);

  return (
    <div>
      <Input value={keyword} onChange={value => setKeyword(value)} clearable placeholder="请输入" />
      <ul style={{ height: 250, overflow: 'auto', border: '1px solid #ccc' }}>
        {list.map(l => (
          <li key={l.id}>
            <span>name：</span>
            <span>{l.name}</span>
          </li>
        ))}
        {loading && <Loading fill mask message="加载中" />}
      </ul>
    </div>
  );
};
