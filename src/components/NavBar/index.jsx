import React from 'react';
import CartWidget from "../CartWidget";
import { Link, NavLink } from "react-router-dom";
import Gaming from "../../json/arrayProductos.json"

export const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div className="container-fluid">
            <Link className="navbar-brand active" to={"/"}>IñaShop</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div className="navbar-nav">
                <NavLink className="nav-link" aria-current="page" to={"/categoria/gaming"}>Gaming</NavLink>
                <NavLink className="nav-link" aria-current="page" to={"/categoria/oyh"}>Oficina y Hogar</NavLink>
                <NavLink className="nav-link" aria-current="page" to={"/categoria/notebooks"}>Notebooks</NavLink>
                <NavLink className="nav-link" aria-current="page" to={"/categoria/consolas"}>Consolas</NavLink>
                <a className="nav-link" href="#">
                <CartWidget/>
                </a>
              </div>
            </div>
          </div>
        </nav>
      );
}

export default NavBar;