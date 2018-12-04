export const TOGGLE_LOGIN_CHOICE = 'TOGGLE_LOGIN_CHOICE';
export const toggleLoginChoice = () => ({ type: TOGGLE_LOGIN_CHOICE });

export const TOGGLE_SIDE_NAV = 'TOGGLE_SIDE_NAV';
export const toggleSideNav = () => ({ type: TOGGLE_SIDE_NAV });

export const TOGGLE_ADD_CHILD = 'TOGGLE_ADD_CHILD';
export const toggleAddChild = () => ({ type: TOGGLE_ADD_CHILD });

export const TOGGLE_ADD_TASK = 'TOGGLE_ADD_TASK';
export const toggleAddTask = childId => ({ type: TOGGLE_ADD_TASK, childId });

export const TOGGLE_TASK_DETAILS = 'TOGGLE_TASK_DETAILS';
export const toggleTaskDetails = task => ({ type: TOGGLE_TASK_DETAILS, task });