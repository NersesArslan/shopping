import { NavLink , Outlet} from "react-router-dom"
import { BsCart } from "react-icons/bs";

export default function Navbar({cart}) {
    return(
      
    <div >
        <nav className="navbar">
            <ul>
            <li>
                   <NavLink  style={({ isActive }) =>
            isActive ? { color: "red" } : { color: "black" }
          } to="/">Home</NavLink>
               </li>
               <li>
                   <NavLink style={({ isActive }) =>
            isActive ? { color: "red" } : { color: "black" }
          } to="shopping">Shopping</NavLink>
               </li>
               <li>
                   <NavLink style={({ isActive }) =>
            isActive ? { color: "red" } : { color: "black" }
          } to="cart"><BsCart/> {cart.length}</NavLink>
               </li>
            </ul>
        </nav>
       
            <Outlet />
       
    </div>
    )
}