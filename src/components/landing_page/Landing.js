import { connect } from 'react-redux';
import { Loader } from '../Loader';
import { MdExpandMore } from 'react-icons/md';
import { Redirect } from 'react-router-dom';
import { Slogan } from './Slogan';

import React from 'react';
import LoginForms from './LoginForms';

import '../../styles/landing.css';

const mapStateToProps = state => ({
    loggedIn: state.auth.user !== null,
    user: state.auth.user,
    loading: state.auth.loading
});

export const Landing = props => props.loading ? <Loader /> : 
    props.loggedIn && props.user.isParent ? <Redirect to='/dashboard_parent' /> :
    props.loggedIn && !props.user.isParent ? <h1>Welcome {props.user.name}</h1> : 
    (
        <main className='landing'>
            <Slogan />
            <LoginForms />
            <div className='divider'></div>
            <MdExpandMore className='next-page' />
        </main>
    )

export default connect(mapStateToProps)(Landing);