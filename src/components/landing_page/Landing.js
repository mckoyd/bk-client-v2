import { connect } from 'react-redux';
import React from 'react';
import { Redirect } from 'react-router-dom';
import { Slogan } from './Slogan';
import LoginForms from './LoginForms';
import { MdExpandMore } from 'react-icons/md';
import '../../styles/landing.css';

const mapStateToProps = state => ({
    loggedIn: state.auth.user !== null,
    user: state.auth.user,
    loading: state.auth.loading
});

const Landing = props => (props.loading) ? (
        <section className="wrapper">
            <div className="spinner">
            <i></i>
            <i></i>
            <i></i>
            <i></i>
            <i></i>
            <i></i>
            <i></i>
            </div>
        </section>
    )
    : (props.loggedIn && props.user.isParent) ? <Redirect to='/dashboard_parent' /> :
    (
        <main className='landing'>
            <Slogan />
            <LoginForms />
            <div className='divider'></div>
            <MdExpandMore className='next-page' />
        </main>
    )

export default connect(mapStateToProps)(Landing);