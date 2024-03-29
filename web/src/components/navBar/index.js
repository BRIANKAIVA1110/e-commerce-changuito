import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './styles.css';
import useCookie from '../../hooks/cookie';

export default function NavBar() {
 const navigate = useNavigate();
 const { checkCookie, deleteCookie } = useCookie();

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
   <div className="main-menu-search">
    <div className="main-logo">
     <Link to={`/`}>Changuito-Cart</Link>
    </div>
    <div className="main-search-bar">
     <form action="#">
      <input type="text"
       placeholder="Buscar productos, marcas y mas..."
       name="search"
       onKeyDown={handleOnSearchKeyDown} />
      <button type="submit"><i class="fa fa-search"></i></button>
     </form>
    </div>
   </div>
   <div className="main-menu-nav-bar">
    <div className="main-nav">
     <div className="main-nav-user">
      <Link to={`/`}>Brian Villaroel</Link>
     </div>
     <div className="main-nav-menu">
      <Link className="off" to={'/'}>Categorias</Link>
      <Link className="off" to={'/'}>Ofertas</Link>
      <Link className="off" to={'/'}>Historial</Link>
      <Link className="off" to={'/'}>Supermercado</Link>
      <Link className="off" to={'/'}>Ayuda</Link>

     </div>
     <div className="main-nav-cart">
      { checkCookie("username") ?
       <>
        <Link to={`/`} title="Carrito" className="off"><i class="fa fa-shopping-cart" aria-hidden="true"></i></Link>
        <a onClick={() => {
         deleteCookie("username");
         navigate(`/access/login`);
        }}>Cerrar sesión</a> 
       </>
       :
       <>
        <Link to={`/access/register`} title="Creà tu cuenta" className="off">Creà tu cuenta</Link>
        <Link to={`/access/login`} title="Ingresa" className="off">Ingresá</Link>
       </>
      }     
     </div>
    </div>
   </div>
  </>
 )
}