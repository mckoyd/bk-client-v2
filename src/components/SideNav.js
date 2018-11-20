import { connect } from 'react-redux';
import { FiMinusSquare } from 'react-icons/fi';
import React from 'react';
import '../styles/sidenav.css';
import { toggleSideNav, toggleAddChild } from '../actions/toggles';
import SignupFormChild from './dashboard_parent/SignupFormChild';

const mapStateToProps = state => ({
    loggedIn: state.auth.user !== null,
    user: state.auth.user,
    sideNavView: state.toggles.sideNav.menuView
})
export const SideNav = props => props.loggedIn ?
        <div className={props.sideNavView ? 'menu visible' : 'menu'}>
            <FiMinusSquare onClick={() => props.dispatch(toggleSideNav())}/>
            <button onClick={() => props.dispatch(toggleAddChild())}>add a child</button>
        </div> 
            : 
        <div className={props.sideNavView ? 'menu visible' : 'menu'}>
            <FiMinusSquare onClick={() => props.dispatch(toggleSideNav())}/>
            not logged in
        </div>;

export default connect(mapStateToProps)(SideNav);