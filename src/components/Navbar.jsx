import { Link , Outlet} from "react-router-dom"
import { BsCart } from "react-icons/Bs";

export default function Navbar({cart}) {
    return(
      
    <div >
        <nav className="navbar">
            <ul>
            <li>
                   <Link to="/">Home</Link>
               </li>
               <li>
                   <Link to="shopping">Shopping</Link>
               </li>
               <li>
                   <Link to="cart"><BsCart/> {cart.length}</Link>
               </li>
            </ul>
        </nav>
       
            <Outlet />
       
    </div>
    )
}