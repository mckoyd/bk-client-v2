import { API_BASE_URL } from '../config';
import { refreshAuthToken } from './auth';

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

export const POST_TASK_SUCCESS = 'POST_TASK_SUCCESS';
export const postTaskSuccess = task => ({ type: POST_TASK_SUCCESS, task });

export const POST_TASK_ERROR = 'POST_TASK_ERROR';
export const postTaskError = err => ({ type: POST_TASK_ERROR, err });

export const POST_TASK_REQUEST = 'POST_TASK_REQUEST';
export const postTaskRequest = () => ({ type: POST_TASK_REQUEST });

export const postTask = (name, pointValue, childId) => (dispatch, getState) => {
    dispatch(postTaskRequest());
    const authToken = getState().auth.authToken
    fetch(`${API_BASE_URL}/tasks`, {
        method: 'POST',
        mode: 'cors',
        headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${authToken}` },
        body: JSON.stringify({name, pointValue, childId})
    })
    .then(res => {
        if(!res.ok) res.json()
            .then(err => dispatch(postTaskError(err)))
        else res.json()
            .then(task => {
                dispatch(postTaskSuccess(task));
                dispatch(refreshAuthToken());
            })
    })
    .catch(err => dispatch(postTaskError(err)));
}



