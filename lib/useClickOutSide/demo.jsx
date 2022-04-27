import { useClickOutSide } from 'winhooks';
import { useRef } from 'react';
import { Button } from 'ultra-design';

export default () => {
  const ref = useRef(null);

  useClickOutSide(ref, () => {
    console.log('Clicked');
  });

  return (
    <div className="demo-wrapper">
      <Button type="primary" ref={ref}>
        点击这个按钮的外部
      </Button>
    </div>
  );
};
