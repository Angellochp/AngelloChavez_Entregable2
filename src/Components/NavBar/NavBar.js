import {Link, NavLink} from 'react-router-dom';
import React from "react";
import CarWidget from "../CarWidget/CarWidget";
import '../NavBar/NavBar.css'

const NavBar = () => {

return(

<>

<div className="menu-navbar-container">
    <Link className="menu-title" to="/">Logo Ajo Caramelo</Link>
    <nav className="menu-items">
    <li className="li-navbar">

        <NavLink to="/category/:Propiedades" className="menu-list">Propiedades</NavLink>
    </li>
    <li className="li-navbar"> 
      <NavLink to="/Historia/category/:Historia" className="menu-list">Historia</NavLink>
      {/*   <a href="" className="menu-list">Historia</a> */}

    </li>
    <li className="li-navbar">
    <NavLink to="/category/:Lo-Quiero" className="menu-list">Lo Quiero </NavLink>
        {/* <a href="" className="menu-list">Lo Quiero!</a> */}

    </li>
    <CarWidget/>
    </nav>
   
</div>


</>

)

}


export default NavBar 