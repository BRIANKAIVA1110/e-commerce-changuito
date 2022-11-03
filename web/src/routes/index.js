import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import Home from '../views/Home';

export default function Routes() {

 const router = createBrowserRouter(
  createRoutesFromElements(
   <Route path='/' element={<Home />} />
  )
 );

 return <RouterProvider router={router} />;
}