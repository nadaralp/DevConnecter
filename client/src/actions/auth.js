import axios from 'axios';
import { setAlert } from './alert';
import { REGISTER_SUCCESS, REGISTER_FAIL } from './types';

//REGISTER USER
export const register = ({ name, email, password }) => async dispatch => {
    const config = {
        headers: {
            "Content-Type": "application/json"
        }
    }
    const body = JSON.stringify({ name, email, password });

    try {
        const res = await axios.post('http://localhost:5000/api/users', body, config);
        dispatch({
            type: REGISTER_SUCCESS,
            payload: res.data
        })
        dispatch(setAlert('Registered Successfully !', 'success'))
    } catch (err) {
        const errors = err.response.data.errors;

        if (errors) {
            errors.forEach((err) => dispatch(setAlert(err.msg, 'danger')))
        }
        dispatch({
            type: REGISTER_FAIL
        })
    }
}