import { Outlet } from 'react-router-dom';
import NavBar from '../../components/navBar'

export default function MainLayuot() {
 return (
  <>
    <header className="header">
        <NavBar />
    </header>
    <Outlet />
  </>
 )
}
