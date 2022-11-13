import { Outlet, Link } from 'react-router-dom';
import './styles.css';

export default function Access() {
 return (
  <>
   <div className="access-header">
    <div className="access-logo">
     <Link to={`/`}>Changuito-Cart</Link>
    </div>
   </div>
   <Outlet />
  </>
 )
}