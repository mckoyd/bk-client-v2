import { TOGGLE_LOGIN_CHOICE, TOGGLE_SIDE_NAV, TOGGLE_ADD_CHILD } from "../actions/toggles";


const initState = {
    loginChoice: { parent: true, child: false },
    sideNav: {
        menuView: false,
        seeTasks: true,
        seeRewards: false,
        addChild: false,
        deleteChild: false,
        deleteParent: false,
    }
}

export default (state=initState, action) => {
    switch(action.type){
        case TOGGLE_LOGIN_CHOICE:
            return {...state, loginChoice: { 
                        parent: !state.loginChoice.parent,
                        child: !state.loginChoice.child
                        }
                    }
        case TOGGLE_SIDE_NAV:
            return {
                ...state, 
                sideNav: {
                    ...state.sideNav, menuView: !state.sideNav.menuView
                    }
                }
        case TOGGLE_ADD_CHILD:
                return {
                    ...state,
                    sideNav: {
                        ...state.sideNav,
                        menuView: false,
                        addChild: !state.sideNav.addChild
                    }
                }
        default:
            return state;
    }
}