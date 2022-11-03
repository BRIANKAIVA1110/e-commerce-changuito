import "../components/NavBar.css";
import "../components/Menu.css";
import Search from "../components/Search";
import {Route, Link, Outlet} from 'react-router-dom'

export default function StartLayout(){

    return (
        <>
            <header>
                <nav className="navBar">
                    <div>
                        <ul className="menu">
                            <Link to={"Articulos"}>Articulos</Link>
                            <Link to="Proveedores">Proveedores</Link>
                            <Link to="Ventas">Ventas</Link>
                            <Link to="Configuraciones">Configuraciones</Link>
                            <Link to="login" path="logIn">Iniciar Sesion</Link>
                        </ul>
                    </div>
                    <div>
                        <Search></Search>
                    </div>   
                </nav>
            </header>
            <section id="main-content">
                <div >
                    <div id="side-bar"></div>
                    <div id="content">
                        <Outlet/>
                    </div>
                </div>
            </section>
        </>
    );
}