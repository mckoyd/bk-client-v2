import { 
    applyMiddleware, 
    combineReducers,
    compose,
    createStore
} from 'redux';
import authReducer from './reducers/authReducer';
import { loadAuthToken } from './local-storage';
import { setAuth } from './actions/auth';
import { reducer as formReducer } from 'redux-form';
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
    form: formReducer,
    auth: authReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));

const authToken = loadAuthToken();
if(authToken){
    store.dispatch(setAuth(authToken));
}

export default store;