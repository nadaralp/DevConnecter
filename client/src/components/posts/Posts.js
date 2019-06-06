import React, { Fragment, useEffect } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import { getPosts } from '../../actions/post';
import Spinner from '../layout/Spinner';

const Posts = ({ getPosts, post: { posts, loading } }) => {

    useEffect(() => {
        getPosts();
    }, [getPosts])

    return (
        <Fragment>
            {loading || posts.length === 0 ? <Spinner />
                : <Fragment>
                    Posts fetched
            </Fragment>
            }
        </Fragment>
    )
}

Posts.propTypes = {
    getPosts: PropTypes.func.isRequired,
    post: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    post: state.post
})

export default connect(mapStateToProps, {
    getPosts
})(Posts);
