import { useClickOutSide } from '@winme/react-hooks';
import { useRef } from 'react';
import { Button } from 'ultra-design';

export default () => {
  const ref = useRef(null);

  useClickOutSide(ref, () => {
    console.log('Clicked');
  });

  return (
    <div>
      <Button type="primary" ref={ref}>
        Click outside to console log
      </Button>
    </div>
  );
};
