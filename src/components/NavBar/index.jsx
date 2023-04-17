import React from 'react';
import {Link, NavLink} from 'react-router-dom';
import CartWidget from "../CartWidget";

const NavBar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-dark" data-bs-theme="dark">
                <div className="container-fluid">
                    <img src="../logo.png" alt='' width="100"/>
                    <button className="navbar-toggler bg-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav mx-auto">
                        <li className='nav-item'>
                            <Link className='nav-link' to="/">Inicio</Link>
                        </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/categoria/gaming">Gaming</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/categoria/oyh">Oficina y Hogar</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link "to="/categoria/notebooks">Notebooks</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link "to="/categoria/consolas">Consolas</NavLink>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/">
                                    <CartWidget/>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <br/>
        </div>
    )
}

export default NavBar;