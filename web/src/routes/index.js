import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import Main from '../layouts/main';
import DashBoardView from '../views/dashBoard'
import Login from '../views/login';

export default function Routes() {

  /*
 const router = createBrowserRouter(
  createRoutesFromElements(
   <Route path='/' element={<Main />}>
     <Route path='search/:search' element={<DashBoardView/>} />
   </Route>
 
  ));
  */
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
   
    children: [
      {
        path: "dashboard",
        element: <DashBoardView/>,
     
      },
    ],
  },
  {
    path:"/login",
    element:<Login/>
  }
]);

 return <RouterProvider router={router} />;
}