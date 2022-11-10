import { Outlet } from 'react-router-dom';
import NavBar from './NavBar'
import './styles.css';

export default function Main() {
    return (
        <>
            <header>
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