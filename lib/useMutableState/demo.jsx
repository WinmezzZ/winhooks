import { useMutableState } from '@winme/react-hooks';
import { Button } from 'ultra-design';

export default () => {
  const state = useMutableState({
    count: 0,
  });

  return (
    <div className="demo-wrapper border">
      <p>Count is: {state.count}</p>
      <Button onClick={() => state.count++}>Add</Button>
      <Button onClick={() => state.count--}>Reduce</Button>
      <Button onClick={() => (state.count = 0)}>Reset</Button>
    </div>
  );
};
