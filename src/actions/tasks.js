import { API_BASE_URL } from '../config';

export const FETCH_TASKS_SUCCESS = 'FETCH_TASKS_SUCCESS';
export const fetchTasksSuccess = tasks => ({ type: FETCH_TASKS_SUCCESS, tasks });

export const FETCH_TASKS_ERROR = 'FETCH_TASKS_ERROR';
export const fetchTasksError = err => ({ type: FETCH_TASKS_ERROR, err });

export const FETCH_TASKS_REQUEST = 'FETCH_TASKS_REQUEST';
export const fetchTasksRequest = () => ({ type: FETCH_TASKS_REQUEST });

export const fetchTasks = () => (dispatch, getState) => {
    dispatch(fetchTasksRequest());
    const authToken = getState().auth.authToken;
    fetch(`${API_BASE_URL}/tasks`, {
        method: 'GET',
        headers: { Authorization: `Bearer ${authToken}` }
    })
        .then(res => {
            if(!res.ok) res.json()
                .then(err => dispatch(fetchTasksError(err)))
            else res.json()
                .then(tasks => dispatch(fetchTasksSuccess(tasks)))
        })
        .catch(err => console.log(err))
}



