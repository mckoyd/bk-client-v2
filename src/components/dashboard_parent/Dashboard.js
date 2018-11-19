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

export class Dashboard extends React.Component {
    logOut(){
        this.props.dispatch(clearAuth());
        clearAuthToken();
    }

    render(){
        if(!this.props.loggedIn || !this.props.user.isParent) return <Redirect to='/' />;
        return(
            <div>
                {this.props.user.isParent ? 
                        Object.keys(this.props.user.childId).length === 0 || this.props.addChild ? (<SignupFormChild />) 
                            : <ParentCards />
                                : <h1>Welcome Kid! username: {this.props.user.username}</h1>}
                <button onClick={() => this.logOut()}>log out</button>
            </div>
        )
    }
}

export default connect(mapStateToProps)(Dashboard);



