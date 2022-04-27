import { useIsBrowser } from 'winhooks';

export default () => {
  const isBrowser = useIsBrowser();

  return <div className="demo-wrapper">当前环境为：{isBrowser ? 'Browser' : 'Server'}</div>;
};
