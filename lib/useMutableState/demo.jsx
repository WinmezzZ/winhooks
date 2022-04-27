import { useMutableState } from 'winhooks';
import { Button } from 'ultra-design';

export default () => {
  const state = useMutableState({
    count: 0,
  });

  return (
    <div className="demo-wrapper border">
      <p>
        Count is:
        {state.count}
      </p>
      <Button onClick={() => state.count++}>+</Button>
      <Button onClick={() => state.count--}>-</Button>
      <Button onClick={() => (state.count = 0)}>重置</Button>
    </div>
  );
};
