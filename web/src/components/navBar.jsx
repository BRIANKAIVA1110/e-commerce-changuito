import React from 'react';
import '../components/navBar.css';

function NavBar() {

  return (
    <div className="navBar">
      <input className='inputBuscar' type="text" placeholder='Buscar...'/>
      <input className='inputBtnBuscar' type="button" value="Buscar" />
    </div>
  );
}

export default NavBar;