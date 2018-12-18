import { clearAuth } from '../../actions/auth';
import { clearAuthToken } from '../../local-storage';
import { connect } from 'react-redux';
import React from 'react';
import { Redirect } from 'react-router-dom';
import SignupFormChild from './SignupFormChild';
import ParentCards from './ParentCards';
import { Loader } from '../Loader';


const mapStateToProps = state => ({
    loggedIn: state.auth.user !== null,
    user: state.auth.user,
    addChild: state.toggles.sideNav.addChild,
    loading: state.auth.loading
});

export const Dashboard = props => {
    if(!props.loggedIn || !props.user.isParent) return <Redirect to='/' />;
    console.log(props.user.childId.length < 1)
    return(
        <div>
            {props.loading ? <Loader /> :
                props.user.isParent ? 
                props.user.childId.length < 1 || props.addChild ? <SignupFormChild />
                        : <ParentCards />
                        : <h1>Welcome Kid! username: {props.user.username}</h1>}
        </div>
    )
}

export default connect(mapStateToProps)(Dashboard);



