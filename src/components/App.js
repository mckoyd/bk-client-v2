import { connect } from 'react-redux';
import { Header } from './Header';
import Landing from './landing_page/Landing';
import React from 'react';
import { Route, withRouter } from 'react-router-dom';
import '../styles/app.css';
import Dashboard from './dashboard_parent/Dashboard';

const mapStateToProps = state => ({
    loggedIn: state.auth.user !== null
});

export class App extends React.Component{
    
    render(){
        console.log(this.props);
        return (
            <div className='app'>
                <Header />
                <Route exact path='/' component={Landing} />
                <Route exact path='/dashboard_parent' component={Dashboard} />
            </div>
        )
    }
}

export default withRouter(connect(mapStateToProps)(App))
