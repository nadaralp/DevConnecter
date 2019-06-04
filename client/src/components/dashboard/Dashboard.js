import React, { useEffect, Fragment } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getProfile } from '../../actions/profile';
import Spinner from '../layout/Spinner';
import DashboardActions from './DashboardActions';

function Dashboard({ getProfile, auth: { user }, profile: { profile, loading } }) {

    useEffect(() => {
        getProfile();
    }, [])

    return (
        loading && profile === null ? <Spinner /> :
            <Fragment>
                <h1 className="large text-primary">Dashboard</h1>
                <p className="lead"><i className="fas fa-user"></i>{'  '}Welcome {user && user.name} </p>
                {
                    profile !== null
                        ?
                        <Fragment>
                            <DashboardActions />
                        </Fragment>
                        :
                        <Fragment>
                            <p className="">You haven't set up a profile yet, please add some info</p>
                            <Link to="/create-profile" className="btn btn-primary my-1">Create Profile</Link>
                        </Fragment>
                }
            </Fragment>
    )
}

Dashboard.propTypes = {
    getProfile: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    profile: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    auth: state.auth,
    profile: state.profile
});

export default connect(mapStateToProps, {
    getProfile
})(Dashboard);

