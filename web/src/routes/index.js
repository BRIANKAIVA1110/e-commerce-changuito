import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import Main from '../layouts/main';
import Access from '../layouts/access';
import DashBoardView from '../views/dashBoard'
import Login from '../views/login';
import Register from '../views/register';

export default function Routes() {

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/search/:value",
        element: <DashBoardView/>,
      },
    ]
  },
  {
    path:"access",
    element:<Access/>,
    children: [
      {
        path:"login",
        element:<Login/>
      },
      {
        path:"register",
        element:<Register/>
      }
    ]
  }
]);

 return <RouterProvider router={router} />;
}