import { useClickOutSide } from '@winme/react-hooks';
import { useRef } from 'react';
import { Button, Toast } from 'ultra-design';

export default () => {
  const ref = useRef(null);

  useClickOutSide(ref, () => {
    Toast.info('Clicked');
  });

  return (
    <div className="demo-wrapper">
      <Button type="primary" ref={ref}>
        Click outside to show alert, not this button!
      </Button>
    </div>
  );
};
