import CartWidget from "../CartWidget/CartWidget";
import "./Navbar.css";
import { Link, NavLink } from "react-router-dom";

function NavBar() {
  return (
    <nav className="NavBar">
      <Link to="/EntregaFinalReact-Iglesias">
        <h1>Rage</h1>
      </Link>
      <div className="Categories">
        <NavLink to={`/categoria/Remeras`} className={({ isActive }) => (isActive ? "ActiveOption" : "Option")}>
          Remeras
        </NavLink>

        <NavLink to={`/categoria/Bermudas`} className={({ isActive }) => (isActive ? "ActiveOption" : "Option")}>
         Bermudas
         </NavLink>
        
          
        
        <NavLink to={`/categoria/Zapatillas`} className={({ isActive }) => (isActive ? "ActiveOption" : "Option")}>
          Zapatillas
        </NavLink>
       
        <NavLink to={`/categoria/Jeans`} className={({ isActive }) => (isActive ? "ActiveOption" : "Option")}>
          Jeans
        </NavLink>
      </div> 
    <CartWidget/>  
    </nav>     
  );
}  
          
       
      
      


export default NavBar;
