import { Header } from './Header';
import { Landing } from './landing_page/Landing';
import React from 'react';
import { Route, withRouter } from 'react-router-dom';
import '../styles/app.css';

export class App extends React.Component{
    
    render(){
        return (
            <div className='app'>
                <Header />
                <Route exact path='/' component={Landing} />
            </div>
        )
    }
}

export default withRouter(App)
