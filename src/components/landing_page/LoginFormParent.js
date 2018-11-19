import { connect } from 'react-redux';
import {
    Field, 
    focus, 
    reduxForm
} from 'redux-form';
import { Input } from '../Input';
import { nonEmpty, required } from '../../validators';
import React from 'react';
import { loginParent } from '../../actions/auth';

const mapStateToProps = state => ({
    error: state.auth.error
})

const LoginFormParent = props => {
    let error;
    if(props.error) error = <div className='form-error'>{Object.values(props.error)}</div>;
    return(
        <form className='parent-login'
            onSubmit={props.handleSubmit(inp => props.dispatch(loginParent(inp.parentUsername, inp.parentPassword)))}>
            {error}
            <label htmlFor='parentUsername'>username</label>
            <Field component={Input}
                name='parentUsername'
                placeholder='ex. bestparent'
                type='text'
                id='parentUsername'
                validate={[required, nonEmpty]} />
            <label htmlFor='parentPassword'>password</label>
            <Field component={Input}
                name='parentPassword'
                type='password'
                id='parentPassword'
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
    form: 'loginParent',
    onSubmitFail: (errors, dispatch) => dispatch(focus('loginParent', 'parentUsername'))
})(connect(mapStateToProps)(LoginFormParent));

