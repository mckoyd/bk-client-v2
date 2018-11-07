import {
    Field, 
    focus, 
    reduxForm
} from 'redux-form';
import Input from '../Input';
import { nonEmpty, required } from '../../validators';
import React from 'react';
import { registerParent } from '../../actions/auth';

export const LoginFormParent = props => (
    <form className='parent-login'
        onSubmit={props.handleSubmit(inp => props.dispatch(registerParent(inp.parentUsername, inp.parentPassword)))}>
    <label htmlFor='parentUsername'>username</label>
        <Field component={Input}
            name='parentUsername'
            placeholder='ex. bestparent'
            type='text'
            id='parentUsername'
            validate={[required, nonEmpty]} />
        <Field component={Input}
            name='parentPassword'
            type='password'
            id='parentPassword'
            validate={[required, nonEmpty]} />
        <button className='login-btn'
            disabled={props.pristine || props.submitting}>
            log in
        </button>
    </form>
);

export default reduxForm({
    form: 'loginParent',
    onSubmitFail: (errors, dispatch) => dispatch(focus('loginParent', 'parentUsername'))
})(LoginFormParent);

