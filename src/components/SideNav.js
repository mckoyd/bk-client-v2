import { connect } from 'react-redux';
import { FiMinusSquare } from 'react-icons/fi';
import React from 'react';
import '../styles/sidenav.css';
import { toggleSideNav, toggleAddChild } from '../actions/toggles';
import SignupFormChild from './dashboard_parent/SignupFormChild';
import { clearAuth } from '../actions/auth';
import { clearAuthToken } from '../local-storage';

const mapStateToProps = state => ({
    loggedIn: state.auth.user !== null,
    user: state.auth.user,
    sideNavView: state.toggles.sideNav.menuView
})
export const SideNav = props => props.loggedIn ?
        <div className={props.sideNavView ? 'menu visible' : 'menu'}>
            <FiMinusSquare onClick={() => props.dispatch(toggleSideNav())}/>
            <button type='button' onClick={() => props.dispatch(toggleAddChild())}>add a child</button>
            <button type='button' onClick={() => {
                props.dispatch(toggleSideNav());
                props.dispatch(clearAuth());
                clearAuthToken();
            }}>log out</button>
        </div> 
            : 
        <div className={props.sideNavView ? 'menu visible' : 'menu'}>
            <FiMinusSquare onClick={() => props.dispatch(toggleSideNav())}/>
            not logged in
        </div>;

export default connect(mapStateToProps)(SideNav);