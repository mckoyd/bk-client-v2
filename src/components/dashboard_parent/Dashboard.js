import { clearAuth } from '../../actions/auth';
import { clearAuthToken } from '../../local-storage';
import { connect } from 'react-redux';
import React from 'react';
import { Redirect } from 'react-router-dom';


const mapStateToProps = state => ({
    loggedIn: state.auth.user !== null,
    user: state.auth.user
});

export class Dashboard extends React.Component {
    logOut(){
        this.props.dispatch(clearAuth());
        clearAuthToken();
    }

    render(){
        if(!this.props.loggedIn) return <Redirect to='/' />;
        return(
            <div>
                {this.props.user.isParent ? <h1>Welcome Parent! username: {this.props.user.username}</h1> : 
                    <h1>Welcome Kid! username: {this.props.user.username}</h1>}
                <button onClick={() => this.logOut()}>log out</button>
            </div>
        )
    }
}

export default connect(mapStateToProps)(Dashboard);



