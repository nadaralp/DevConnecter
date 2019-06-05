import React, { useEffect, Fragment } from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Spinner from '../layout/Spinner';
import { getProfileById } from '../../actions/profile';
import ProfileTop from './ProfileTop';
import ProfileAbout from './ProfileAbout';
import ProfileExperience from './ProfileExperience.js';
import ProfileEducation from './ProfileEducation.js';

const Profile = ({ getProfileById, match, profile: { profile, loading }, auth }) => {
    useEffect(() => {
        getProfileById(match.params.id)
    }, [getProfileById, match.params.id])

    return (
        <Fragment>
            {loading || profile === null ? <Spinner />
                :
                <Fragment>
                    <Link to="/profiles" className="btn btn-light">Go Back</Link>
                    {
                        auth.isAuthenticated && auth.loading === false && auth.user._id === profile.user._id &&
                        <Link className="btn btn-dark" to="/edit-profile">Edit Profile
                        </Link>
                    }
                    <div className="profile-grid my-1">
                        <ProfileTop profile={profile} />
                        <ProfileAbout profile={profile} />
                        <div className="profile-exp bg-white p-2">
                            <h2 className="text-primary">Experience</h2>
                            {
                                profile.experience.length > 0 ?
                                    <Fragment>
                                        {
                                            profile.experience.map((exp) => <ProfileExperience key={exp._id} experience={exp} />)
                                        }
                                    </Fragment>
                                    : <h4>No Experience Credentials</h4>
                            }
                        </div>
                        <div className="profile-edu bg-white p-2">
                            <h2 className="text-primary">Education</h2>
                            {
                                profile.education.length > 0 ?
                                    <Fragment>
                                        {
                                            profile.education.map((edu) => <ProfileEducation key={edu._id} education={edu} />)
                                        }
                                    </Fragment>
                                    : <h4>No Education Credentials</h4>
                            }
                        </div>
                    </div>
                </Fragment>
            }
        </Fragment>
    )
}

Profile.propTypes = {
    getProfileById: PropTypes.func.isRequired,
    profile: PropTypes.object.isRequired,
    auth: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    profile: state.profile,
    auth: state.auth
})

export default connect(mapStateToProps, {
    getProfileById
})(Profile);
