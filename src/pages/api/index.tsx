import { Suspense, useEffect, useMemo, useState } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { Menu } from 'ultra-design';
import './index.less';

function Api() {
  const [menus, setMenus] = useState<string[]>([]);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (menus.length) return;

    import('@lib/index').then(modules => {
      setMenus(Object.keys(modules));
    });
  }, []);

  const handleClick = async (key: string) => {
    navigate(`/api/${key}`);
  };

  const selectKey = useMemo(() => {
    const key = location.pathname.replace('/api/', '');

    return key;
  }, [location]);

  return (
    <div className="api-page">
      <Menu style={{ width: 200, borderRight: '1px solid #ccc' }} defaultSelectedKey={selectKey} onClick={handleClick}>
        {menus.map(m => (
          <Menu.SubMenu key={m}>{m}</Menu.SubMenu>
        ))}
      </Menu>
      <div className="markdown-content">
        <Suspense fallback={null}>
          <Outlet />
        </Suspense>
      </div>
    </div>
  );
}

export default Api;
