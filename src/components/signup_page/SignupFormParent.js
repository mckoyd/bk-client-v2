import { connect } from 'react-redux';
import {
    Field, 
    focus, 
    reduxForm
} from 'redux-form';
import { Input } from '../Input';
import { nonEmpty, required, isTrimmed, matches } from '../../validators';
import React from 'react';
import { Redirect } from 'react-router-dom';
import '../../styles/signup.css';
import { signupParent } from '../../actions/auth';



const matchesPassword = matches('signupPassword');
const mapStateToProps = state => ({
    loggedIn: state.auth.user !== null,
    error: state.auth.error,
    isParent: state.auth.user ? state.auth.user.isParent : false
})
export const SignupFormParent = props => {
    let error;
    if(props.error) error = <div className='form-error'>{Object.values(props.error).join('\n')}</div>;
    if(props.loggedIn && props.isParent) return <Redirect to='/dashboard_parent' />;
    return(
        <div className='signup-page'>
            <h3 className='signup-greeting'>Start giving bonuses <br /><span>today!</span></h3>
            <form className='parent-signup'
            onSubmit={props.handleSubmit(inp => {
                        const {
                            signupName,
                            signupEmail,
                            signupUsername, 
                            signupPassword,
                            signupConfirmPassword
                        } = inp;
                        props.dispatch(signupParent(
                            signupUsername, 
                            signupPassword, 
                            signupConfirmPassword, 
                            signupName, 
                            signupEmail))
                    }
                )} >
                <h3 className='parent-form-heading'>Create an account</h3>
                <div className='signup-form-body'>
                    {error}
                    <label htmlFor='signupName'>Name</label>
                    <Field component={Input}
                        name='signupName'
                        placeholder='ex. Sam Wiles'
                        type='text'
                        id='signupName'
                        validate={[required, nonEmpty, isTrimmed]} 
                        />
                    <label htmlFor='signupEmail'>Email</label>
                    <Field component={Input}
                        name='signupEmail'
                        placeholder='ex. samwiles@gmail.com'
                        type='text'
                        id='signupEmail'
                        validate={[required, nonEmpty, isTrimmed]} 
                        />
                    <label htmlFor='signupUsername'>Username</label>
                    <Field component={Input}
                        name='signupUsername'
                        placeholder='ex. swiles'
                        type='text'
                        id='signupUsername'
                        validate={[required, nonEmpty, isTrimmed]} 
                        />
                    <label htmlFor='signupPassword'>password</label>
                    <Field component={Input}
                        name='signupPassword'
                        type='password'
                        id='signupPassword'
                        validate={[required, nonEmpty, isTrimmed]} 
                        />
                    <label htmlFor='signupConfirmPassword'>confirm password</label>
                    <Field component={Input}
                        name='signupConfirmPassword'
                        type='password'
                        id='signupConfirmPassword'
                        validate={[required, nonEmpty, matchesPassword]} 
                        />
                    <button className='login-btn'
                        type='submit'
                        disabled={props.pristine || props.submitting}>
                        log in
                    </button>
                </div>
            </form>
        </div>
    )
};

export default reduxForm({
    form:'parent-signup',
    onSubmitFail: (errors, dispatch) => dispatch(focus('parent-signup', 'signupName'))
})(connect(mapStateToProps)(SignupFormParent));