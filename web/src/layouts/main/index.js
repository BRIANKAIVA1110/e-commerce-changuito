import { Outlet } from 'react-router-dom';
import NavBar from './Navbar';
import './styles.css';

export default function Main() {
    return (
        <>
            <header className="main-header">
                <NavBar />
            </header>
            <main>
                <section>
                    <Outlet />
                </section>
            </main>
            <footer />
        </>
    )
}