import { connect } from 'react-redux';
import React from 'react';
import { Redirect } from 'react-router-dom';
import { Slogan } from './Slogan';
import LoginFormParent from './LoginFormParent';

const mapStateToProps = state => ({
    loggedIn: state.auth.user !== null,
    isParent: state.auth.isParent,
});

export const Landing = props => {
    if(props.loggedIn) return <Redirect to='/dashboard_parent' />;
    return(
        <main>
            <Slogan />
            <LoginFormParent />
        </main>
    )
}

export default connect(mapStateToProps)(Landing);