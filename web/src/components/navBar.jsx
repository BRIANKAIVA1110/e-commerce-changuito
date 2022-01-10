import React from 'react';
import '../components/navBar.css';

function NavBar() {

  return (
    <div className="navBar">
      <div className='navBar_menu'>
        <a href="#"></a>
        <h1>E-Changuito</h1>
      </div>
      <div>
        <input className='inputBuscar' type="text" placeholder='Buscar...'/>
        <input className='inputBtnBuscar' type="button" value="Buscar" />
      </div>
      <div>
        <a href="#">CHANGUITO</a>
      </div>
    </div>
  );
}

export default NavBar;