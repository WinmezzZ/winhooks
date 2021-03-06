import { useColorScheme } from 'winhooks';
import { Button, ConfigProvider } from 'ultra-design';

export default () => {
  const color = useColorScheme();

  return (
    <ConfigProvider theme={{ mode: color }}>
      <div className="demo-wrapper">
        <Button>{color}</Button>
      </div>
    </ConfigProvider>
  );
};
