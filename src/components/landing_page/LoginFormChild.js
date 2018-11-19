import { connect } from 'react-redux';
import {
    Field, 
    focus, 
    reduxForm
} from 'redux-form';
import { Input } from '../Input';
import { nonEmpty, required } from '../../validators';
import React from 'react';
import { loginChild } from '../../actions/auth';

const mapStateToProps = state => ({
    error: state.auth.error
})

const LoginFormChild = props => {
    let error;
    if(props.error) props.error.username ? error = <div className='form-error'>{props.error.username}</div> : error = <div className='form-error'>{props.error.password}</div>
    return(
        <form className='child-login'
            onSubmit={props.handleSubmit(inp => props.dispatch(loginChild(inp.childUsername, inp.childPassword)))}>
            {error}
            <label htmlFor='childUsername'>username</label>
            <Field component={Input}
                name='childUsername'
                placeholder='ex. bestchild'
                type='text'
                id='childUsername'
                validate={[required, nonEmpty]} />
            <label htmlFor='childPassword'>password</label>
            <Field component={Input}
                name='childPassword'
                type='password'
                id='childPassword'
                validate={[required, nonEmpty]} />
            <button className='login-btn'
                type='submit'
                disabled={props.pristine || props.submitting}>
                log in
            </button>
        </form>
    )
};

export default reduxForm({
    form: 'loginChild',
    onSubmitFail: (errors, dispatch) => dispatch(focus('loginChild', 'childUsername'))
})(connect(mapStateToProps)(LoginFormChild));

