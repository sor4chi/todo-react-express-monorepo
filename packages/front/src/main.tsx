import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Header } from './components/layouts/header';
import { Home } from './pages/home';
import { Detail } from './pages/detail';
import './global.css';

const BrowserRouter = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/todo/:id',
    element: <Detail />,
  },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Header />
    <RouterProvider router={BrowserRouter} />
  </React.StrictMode>
);
