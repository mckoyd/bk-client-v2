import { 
    applyMiddleware, 
    combineReducers,
    compose,
    createStore
} from 'redux';
import authReducer from './reducers/authReducer';
import jwtDecode from 'jwt-decode';
import { loadAuthToken } from './local-storage';
import { setAuth, authSuccess } from './actions/auth';
import { reducer as formReducer } from 'redux-form';
import tasksReducer from './reducers/tasksReducer';
import thunk from 'redux-thunk';
import toggleReducer from './reducers/toggleReducer';

const rootReducer = combineReducers({
    form: formReducer,
    auth: authReducer,
    toggles: toggleReducer,
    tasks: tasksReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));

const authToken = loadAuthToken();
if(authToken){
    const decodedToken = jwtDecode(authToken);
    store.dispatch(setAuth(authToken));
    store.dispatch(authSuccess(decodedToken));
}

export default store;