import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import MainLayuot from '../layouts/main';
import Home from '../views/home';
import SearchResult from '../views/searchResult'


export default function Routes() {

 const router = createBrowserRouter(
  createRoutesFromElements(
     <>
          <Route path='/' element={<MainLayuot />}>
               <Route path='/' element={<Home/>} />
               <Route path='search/:search' element={<SearchResult/>} />
          </Route>
          <Route path='/Login' element={<h1>Login</h1>} />
     </>
  )
 );

 return <RouterProvider router={router} />;
}