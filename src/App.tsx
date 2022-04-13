import React, { Suspense } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Menu } from 'ultra-design';
import './App.less';
import RenderRouter from './routes';
import { getFirstPathCode } from './utils/getFirstPathName';

function App() {
  const navigate = useNavigate();
  const location = useLocation();

  const onMenuClick = (key: string) => {
    if (!key) return;
    navigate(key);
  };

  return (
    <div className="App">
      <header className="app-header">
        <Menu horizontal defaultSelectedKey={'/' + getFirstPathCode(location.pathname)} onClick={onMenuClick}>
          <Menu.SubMenu key="/">Home</Menu.SubMenu>
          <Menu.SubMenu key="/guide">Guide</Menu.SubMenu>
          <Menu.SubMenu key="/api">Api</Menu.SubMenu>
          <Menu.SubMenu key="">
            <a href="https://github.com/WinmezzZ/react-hooks" target="_blank" rel="noopener noreferrer">
              Github
            </a>
          </Menu.SubMenu>
        </Menu>
      </header>
      <section className="app-section">
        <Suspense fallback={null}>
          <RenderRouter />
        </Suspense>
      </section>
    </div>
  );
}

export default App;
