import React, { Suspense } from 'react';
import { NavLink } from 'react-router-dom';
import './App.less';
import RenderRouter from './routes';

function App() {
  return (
    <div className="App">
      <header className="app-header">
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/guide">Guide</NavLink>
          </li>
          <li>
            <NavLink to="/api">Api</NavLink>
          </li>
        </ul>
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
