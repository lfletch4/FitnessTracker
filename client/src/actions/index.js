import axios from 'axios';
import { FETCH_USER, FETCH_SURVEYS } from './types';

export const fetchUser = () =>
    async dispatch => {
        const res = await axios.get('/user')
        dispatch({ type: FETCH_USER, payload: res.data });
    }

export const fetchSurveys = () => async dispatch => {
    const res = await axios.get('/api/surveys');
    dispatch({ type: FETCH_SURVEYS, payload: res.data });
};