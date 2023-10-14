import { Link , Outlet} from "react-router-dom"
export default function Navbar() {
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
                   <Link to="cart">Cart</Link>
               </li>
            </ul>
        </nav>
       
            <Outlet />
       
    </div>
    )
}