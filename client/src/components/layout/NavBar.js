import React, { Fragment } from 'react';
import { Link, NavLink } from 'react-router-dom';

const NavBar = () => {
    return (
        <Fragment>
            <nav className="navbar bg-dark">
                <h1>
                    <Link to="/"><i className="fas fa-code"></i> DevConnector</Link>
                </h1>
                <ul>
                    <li><Link to="/profiles">Developers</Link></li>
                    <li><Link to="register">Register</Link></li>
                    <li><Link to="/login">Login</Link></li>
                </ul>
            </nav>
        </Fragment>
    )
}

export default NavBar
