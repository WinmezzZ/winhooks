import { useCallbackState } from 'winhooks';
import { Button } from 'ultra-design';

export default () => {
  const [count, setCount] = useCallbackState(0);

  const onIncrement = () => {
    setCount(
      count => count + 1,
      newCount => {
        console.log(newCount);
      },
    );
  };

  return (
    <Button type="primary" onClick={onIncrement}>
      {count}
    </Button>
  );
};
