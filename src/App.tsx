import React from 'react';
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
import styled from 'styled-components';
import Emergency from './pages/Emergency';
import Feed from './pages/Feed';
import HouseHelp from './pages/HouseHelp';
import Index from './pages/Index';
import Login from './pages/Login';
import Prelogin from './pages/Prelogin';
import Register from './pages/Register';
import ROUTES from './routes';

const router = createBrowserRouter([
  {
    path: ROUTES.INDEX,
    element: <Index />
  },
  {
    path: ROUTES.PRELOGIN,
    element: <Prelogin />
  },
  {
    path: ROUTES.LOGIN,
    element: <Login />
  },
  {
    path: ROUTES.REGISTER,
    element: <Register />
  },
  {
    path: ROUTES.LANDING,
    element: <Feed />
  },
  {
    path: ROUTES.FEED.INDEX,
    element: <Feed />
  },
  {
    path: ROUTES.FEED.EMERGENCY,
    element: <Emergency />
  },
  {
    path: ROUTES.FEED.HOUSE_HELP,
    element: <HouseHelp />
  },
]);

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
`

function App() {
  return (
    <Wrapper>
      <RouterProvider router={router} />
    </Wrapper>
  );
}

export default App;
