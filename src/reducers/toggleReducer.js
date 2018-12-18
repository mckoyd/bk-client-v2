import { 
    TOGGLE_LOGIN_CHOICE, 
    TOGGLE_SIDE_NAV, 
    TOGGLE_ADD_CHILD, 
    TOGGLE_ADD_TASK, 
    GO_TO_PREV_SLIDE,
    GO_TO_NEXT_SLIDE,
    CHOOSE_AVATAR,
    CLEAR_AVATAR_CHOICE
} from "../actions/toggles";

const initState = {
    loginChoice: { parent: true, child: false },
    addTask: { view: false, childId: null },
    sideNav: {
        menuView: false,
        seeTasks: true,
        seeRewards: false,
        addChild: false,
        deleteChild: false,
        deleteParent: false,
    },
    avatarSlides: {
        avatars: [
            require('../images/avatars/boy1.png'),
            require('../images/avatars/girl1.png'), 
            require('../images/avatars/boy2.png'),
            require('../images/avatars/girl2.png'),
            require('../images/avatars/boy3.png'),
            require('../images/avatars/girl3.png'),
            require('../images/avatars/boy4.png'),
            require('../images/avatars/girl4.png'),
            require('../images/avatars/boy5.png'),
            require('../images/avatars/boy6.png')    
        ],
        currentIndex: 0,
        avatarChoice: null
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
        case TOGGLE_ADD_TASK:
            return {
                ...state, addTask: {
                    view: !state.addTask.view, childId: action.childId
                }
            }
        case GO_TO_PREV_SLIDE:
            return {
                ...state, 
                avatarSlides: { 
                    ...state.avatarSlides, currentIndex: state.avatarSlides.currentIndex - 1
                }
            }
        case GO_TO_NEXT_SLIDE:
            return {
                ...state, 
                avatarSlides: { 
                    ...state.avatarSlides, currentIndex: state.avatarSlides.currentIndex + 1
                }
            }
        case CHOOSE_AVATAR:
            return {
                ...state,
                avatarSlides: {
                    ...state.avatarSlides, avatarChoice: action.avatar
                }
            }
        case CLEAR_AVATAR_CHOICE:
            return {
                ...state, 
                avatarSlides: {
                    ...state.avatarSlides,
                    currentIndex: 0,
                    avatarChoice: null 
                }
            }
        default:
            return state;
    }
}