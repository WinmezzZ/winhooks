import { usePrevious } from 'winhooks';
import { useState } from 'react';
import { Button } from 'ultra-design';

export default () => {
  const [count, setCount] = useState(0);
  const prevCount = usePrevious(count);

  const onIncrement = () => {
    setCount(count => count + 1);
  };

  return (
    <div className="demo-wrapper border">
      <Button type="primary" onClick={onIncrement}>
        +
      </Button>
      <hr />
      <p>旧值为：{prevCount}</p>
      <p>新的值为：{count}</p>
    </div>
  );
};
