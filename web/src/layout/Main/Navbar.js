import './styles.css';

export default function Navbar() {
 return (
  <header className="header">
   <div className="menu">
    <div className="logo">
     <a href="http://www.google.com">Changuito-Cart</a>
    </div>
    <div className="search-bar">
     <form action="#">
      <input type="text" placeholder="Buscar productos, marcas y mas..." name="search" />
      <button type="submit"><i class="fa fa-search"></i></button>
     </form>

    </div>
   </div>
   <div className="menu-nav-bar">
    <div className="user-info">
     <a href="http://www.google.com">Brian Villaroel</a>
    </div>
    <nav className="nav">
     <a className="off" href="http://www.google.com">Categorias</a>
     <a className="off" href="http://www.google.com">Ofertas</a>
     <a className="off" href="http://www.google.com">Historial</a>
     <a className="off" href="http://www.google.com">Supermercado</a>
     <a className="off" href="http://www.google.com">Ayuda</a>
    </nav>
   </div>
  </header>
 )
}