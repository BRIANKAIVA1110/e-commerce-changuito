import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import Main from '../layout/Main';
export default function Routes() {

 const router = createBrowserRouter(
  createRoutesFromElements(
   <Route path='/' element={<Main />}>
    
   </Route>
  )
 );

 return <RouterProvider router={router} />;
}