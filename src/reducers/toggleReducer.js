import { TOGGLE_LOGIN_CHOICE } from "../actions/toggles";


const initState = {
    loginChoice: { parent: true, child: false }
}

export default (state=initState, action) => {
    switch(action.type){
        case TOGGLE_LOGIN_CHOICE:
            return {...state, loginChoice: { 
                        parent: !state.loginChoice.parent,
                        child: !state.loginChoice.child
                        }
                    }
        default:
            return state;
    }
}