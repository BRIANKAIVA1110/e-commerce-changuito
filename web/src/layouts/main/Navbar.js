import './styles.css';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function NavBar() {
 const [search, setSearch] = useState('');
 const navigate = useNavigate();

 const handleOnSearchKeyDown = (event) => {

  const { key } = event;
  if (key != 'Enter')
   return;

  const { target: { value } } = event;
  if (!value.length > 0)
   return;

  navigate(`search/${value}`);
  event.preventDefault();

 }

 return (
  <>
   <div className="menu-search">
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
    <div className="nav">
     <div className="nav-user">
      <Link to={`/`}>Brian Villaroel</Link>
     </div>
     <div className="nav-menu">
      <Link className="off" to={'/'}>Categorias</Link>
      <Link className="off" to={'/'}>Ofertas</Link>
      <Link className="off" to={'/'}>Historial</Link>
      <Link className="off" to={'/'}>Supermercado</Link>
      <Link className="off" to={'/'}>Ayuda</Link>

     </div>
     <div className="nav-cart">
      <Link to={`/`} title="Carrito" className="off"><i class="fa fa-shopping-cart" aria-hidden="true"></i></Link>
     </div>
    </div>
   </div>
  </>
 )
}