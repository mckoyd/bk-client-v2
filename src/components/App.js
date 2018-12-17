import { Route, withRouter } from 'react-router-dom';

import Dashboard from './dashboard_parent/Dashboard';
import Header from './Header';
import Landing from './landing_page/Landing';
import React from 'react';
import SignupFormParent from './signup_page/SignupFormParent';
import SignupPage from './signup_page/SignupPage';
import '../styles/app.css';

export const App = () => (
    <div className='app'>
        <Header />
        <Route exact path='/' component={Landing} />
        <Route exact path='/dashboard_parent' component={Dashboard} />
        <Route exact path='/signup_parent' component={SignupPage} />
    </div>
)

export default withRouter(App)
