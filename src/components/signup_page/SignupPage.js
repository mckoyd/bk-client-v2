import React from 'react';
import { connect } from 'react-redux';
import { clearAuth } from '../../actions/auth';
import SignupFormParent from './SignupFormParent';

export class SignupPage extends React.Component {
    componentDidMount(){
        this.props.dispatch(clearAuth());
        console.log(this.props)
    }

    render(){
        return(
            <SignupFormParent />
        )
    }
}

export default connect()(SignupPage);