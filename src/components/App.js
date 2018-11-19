import { connect } from 'react-redux';
import { Header } from './Header';
import Landing from './landing_page/Landing';
import React from 'react';
import { Route, withRouter } from 'react-router-dom';
import '../styles/app.css';
import Dashboard from './dashboard_parent/Dashboard';
import SignupFormParent from './signup_page/SignupFormParent';

const mapStateToProps = state => ({
    loggedIn: state.auth.user !== null
});

class App extends React.Component{
    
    render(){
        return (
            <div className='app'>
                <Header />
                <Route exact path='/' component={Landing} />
                <Route exact path='/dashboard_parent' component={Dashboard} />
                <Route exact path='/signup_parent' component={SignupFormParent} />
            </div>
        )
    }
}

export default withRouter(connect(mapStateToProps)(App))
