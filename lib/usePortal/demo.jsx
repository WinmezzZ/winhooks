import { usePortal, useClickOutSide } from '@winme/react-hooks';
import { useRef, useState } from 'react';
import { Button } from 'ultra-design';

export default () => {
  const { Portal } = usePortal({ id: 'custom-portal' });
  const [visible, setVisible] = useState(true);
  const portalInnerRef = useRef();
  const buttonRef = useRef();

  useClickOutSide(
    portalInnerRef,
    () => {
      setVisible(false);
    },
    [buttonRef],
  );

  return (
    <>
      <Portal>
        {visible && (
          <div
            ref={portalInnerRef}
            style={{
              background: '#fff',
              position: 'fixed',
              top: '50%',
              left: '50%',
              padding: 40,
              border: '1px solid #ccc',
            }}
          >
            点击外部关闭弹框
          </div>
        )}
      </Portal>
      <Button ref={buttonRef} onClick={() => setVisible(true)}>
        打开弹框
      </Button>
    </>
  );
};
