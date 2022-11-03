import React, { Children } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { ArticulosView } from './views/ArticulosView';
import { ProveedoresView } from './views/ProveedoresView';
import { LoginLayout } from './layout/LoginLayout';
import StartLayout from './layout/StartLayout';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import { DashBoardView } from './views/DashBoardView';
import { CartView } from './views/CartView';

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
        <Route path='/' element= { <StartLayout/> }>
          <Route path='search?:search' element={ <DashBoardView/> } />
          <Route path='articulos' element={ <ArticulosView/> } />
          <Route path='cart' element={ <CartView/> } />
          <Route path='proveedores' element={ <ProveedoresView/> } />
        </Route>
        <Route path='/Login' element={<LoginLayout/>} />
    </>
    )
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <RouterProvider router={router}/>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
