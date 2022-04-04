import React, { Suspense } from 'react';
import { Link } from 'react-router-dom';
import './App.less';
import RenderRouter from './routes';

function App() {
  return (
    <div className="App">
      <header className="app-header">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/guide">Guide</Link>
          </li>
          <li>
            <Link to="/api">Api</Link>
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
