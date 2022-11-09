import { Outlet } from 'react-router-dom';
import NavBar from '../main/Navbar'

export default function Main() {
 return (
  <>
    <header className="header">
        <NavBar />
    </header>
    <main>
        <section>
            <Outlet />
        </section>
    </main>
   <footer className="footer">
   </footer>
  </>
 )
}