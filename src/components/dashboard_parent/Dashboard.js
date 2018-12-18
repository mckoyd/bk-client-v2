import { clearAuth } from '../../actions/auth';
import { clearAuthToken } from '../../local-storage';
import { connect } from 'react-redux';
import React from 'react';
import { Redirect } from 'react-router-dom';
import SignupFormChild from './SignupFormChild';
import ParentCards from './ParentCards';


const mapStateToProps = state => ({
    loggedIn: state.auth.user !== null,
    user: state.auth.user,
    addChild: state.toggles.sideNav.addChild
});

export const Dashboard = props => {
    if(!props.loggedIn || !props.user.isParent) return <Redirect to='/' />;
    return(
        <div>
            {props.user.isParent ? 
                props.user.childId.length === 0 || props.addChild ? 
                    (<SignupFormChild />) 
                        : <ParentCards />
                        : <h1>Welcome Kid! username: {props.user.username}</h1>}
        </div>
    )
}

export default connect(mapStateToProps)(Dashboard);



