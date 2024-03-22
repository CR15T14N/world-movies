import { NavLink } from "react-router-dom";
import "../styles/NavBar.css";

function NavBar() {
  return (
    <nav className="navbar">
      <div className="logo">Mi Aplicación</div>
      <div className="links">



        <NavLink to={"/"} className="link">
          Presentacion
        </NavLink>
       
        <NavLink to={"/home"} className="link">
          Inicio
        </NavLink>

        <NavLink to={"/movies"} className="link">
          Películas
        </NavLink>
        
        <NavLink to={"/series"} className="link">
          Series
        </NavLink>
      </div>
    </nav>
  );
}

export default NavBar;

