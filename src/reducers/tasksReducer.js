import { 
    FETCH_TASKS_REQUEST, 
    FETCH_TASKS_ERROR, 
    FETCH_TASKS_SUCCESS 
} from "../actions/tasks";


const initState = {
    tasks: [],
    error: null,
    loading: false
}

export default (state=initState, action) => {
    switch(action.type){
        case FETCH_TASKS_REQUEST:
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
                tasks: action.tasks
            }
        default:
            return state;
    }
}