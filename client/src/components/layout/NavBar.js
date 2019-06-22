import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logout } from '../../actions/auth';
import pic from './topDevelopers.png';

const NavBar = ({ auth: { isAuthenticated, loading }, logout }) => {

    const authLinks = (
        <ul>
            <li><Link to="/profiles"><i className="fas fa-users"></i><span className="hide-sm">{' '}Developers</span></Link></li>
            <li><Link to="/posts"><i className="fas fa-clipboard"></i><span className="hide-sm">{' '}Posts</span></Link></li>
            <li><Link to="/dashboard"><i className="fas fa-user"></i><span className="hide-sm">{' '}Dashboard</span></Link></li>
            <li><Link onClick={logout} to="#"><i className="fas fa-sign-out-alt"></i>{'  '}<span className="hide-sm">Logout</span></Link></li>
        </ul>
    );

    const guestLinks = (
        <ul>
            <li><Link to="/profiles"><i className="fas fa-users"></i><span className="hide-sm">{' '}Developers</span></Link></li>
            <li><Link to="/register">Register</Link></li>
            <li><Link to="/login">Login</Link></li>
        </ul>
    );

    return (
        <Fragment>
            <nav className="navbar bg-dark">
                <h1><Link to="/"><img className="nav-img" src={pic} /></Link>
                    <Link to="/"> <span className="nav-brand-name"></span></Link>
                </h1>
                {!loading && (<Fragment>
                    {isAuthenticated ? authLinks : guestLinks}
                </Fragment>)}
            </nav>
        </Fragment>
    )
}

NavBar.propTypes = {
    auth: PropTypes.object.isRequired,
    logout: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
    auth: state.auth
});

export default connect(mapStateToProps, {
    logout
})(NavBar);
