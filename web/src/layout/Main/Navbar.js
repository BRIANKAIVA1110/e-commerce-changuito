import './styles.css';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function Navbar() {
 const [search, setSearch] = useState('');
 const navigate = useNavigate();
 const getUrl = () => `/products/search/`;

 const handleOnSearchKeyDown = (event) => {

  const { key } = event;
  if (key != 'Enter')
   return;

  const { target: { value } } = event;
  if (!value.length > 0)
   return;

  navigate(`${getUrl()}${value}`);
  event.preventDefault();

 }

 return (
  <header className="header">
   <div className="menu">
    <div className="logo">
     <Link to={`/`}>Changuito-Cart</Link>
    </div>
    <div className="search-bar">
     <form action="#">
      <input type="text"
       placeholder="Buscar productos, marcas y mas..."
       name="search"
       onKeyDown={handleOnSearchKeyDown} />
      <button type="submit"><i class="fa fa-search"></i></button>
     </form>
    </div>
   </div>
   <div className="menu-nav-bar">
    <div className="menu-nav-bar-first-row">
     <div className="user-info">
      <Link to={`/`}>Brian Villaroel</Link>
     </div>
     <nav className="nav">
      <Link className="off" to={'/'}>Categorias</Link>
      <Link className="off" to={'/'}>Ofertas</Link>
      <Link className="off" to={'/'}>Historial</Link>
      <Link className="off" to={'/'}>Supermercado</Link>
      <Link className="off" to={'/'}>Ayuda</Link>
     </nav>
    </div>
    <div className="menu-nav-bar-second-row ">
     <Link to={`/`} title="Carrito" className="off"><i class="fa fa-shopping-cart" aria-hidden="true"></i></Link>
    </div>
   </div>
  </header>
 )
}