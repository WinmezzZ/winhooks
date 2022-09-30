import React, { lazy, FC } from 'react';
import Home from '@/pages/home';
import { RouteObject } from 'react-router';
import { useRoutes, Navigate } from 'react-router-dom';

const Api = lazy(() => import('@/pages/api'));
const Guide = lazy(() => import('@/pages/guide'));

const apiPageChildRoutes: RouteObject[] = (() => {
  const modules = require.context('@lib/', true, /index.mdx/);

  return modules.keys().map(m => {
    const name = m.replace('./', '').replace('/index.mdx', '');
    const Com = lazy(() => import(`@lib/${name}/index.mdx`));

    return {
      path: name,
      element: React.createElement(Com),
    };
  });
})();

apiPageChildRoutes.push({
  path: '',
  element: <Navigate to={apiPageChildRoutes[0].path!} replace />,
});

const routeList: RouteObject[] = [
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/guide',
    element: <Guide />,
  },
  {
    path: '/api',
    element: <Api />,
    children: apiPageChildRoutes,
  },
];

const RenderRouter: FC = () => {
  const element = useRoutes(routeList);

  return element;
};

export default RenderRouter;
