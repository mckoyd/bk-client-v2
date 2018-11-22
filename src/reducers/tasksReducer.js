import { 
    FETCH_TASKS_REQUEST, 
    FETCH_TASKS_ERROR, 
    FETCH_TASKS_SUCCESS,
    POST_TASK_ERROR,
    POST_TASK_REQUEST,
    POST_TASK_SUCCESS 
} from "../actions/tasks";


const initState = {
    allTasks: [],
    newestTask: null,
    error: null,
    loading: false
}

export default (state=initState, action) => {
    switch(action.type){
        case FETCH_TASKS_REQUEST || POST_TASK_REQUEST:
            return {
                ...state, 
                loading: true,
                error: null
            };
        case FETCH_TASKS_ERROR:
            return {
                ...state,
                error: action.err,
                loading: false,
                tasks: []
            }
        case FETCH_TASKS_SUCCESS:
            return {
                ...state,
                loading: false,
                allTasks: action.tasks
            }
        case POST_TASK_ERROR:
            return {
                ...state,
                loading: false,
                error: action.err
            }
        case POST_TASK_SUCCESS:
            return {
                ...state,
                loading: false,
                newestTask: action.task
            }    
        default:
            return state;
    }
}