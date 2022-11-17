import Main from '../layouts/main';
import Access from '../layouts/access';
import Login from '../views/login';
import Register from '../views/register';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import SearchResult from '../views/searchResult';

export default function Routes() {

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/search/:value",
        element: <SearchResult/>,
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