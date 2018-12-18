import { connect } from 'react-redux';
import {
    Field, 
    focus, 
    reduxForm,
    reset
} from 'redux-form';
import { Input } from '../Input';
import { nonEmpty, required, isTrimmed, matches } from '../../validators';
import React from 'react';
import '../../styles/signup.css';
import { signupChild } from '../../actions/auth';
import { toggleAddChild } from '../../actions/toggles';
import AvatarSlider from '../AvatarSlider';



const matchesPassword = matches('signupPassword');
const mapStateToProps = state => ({
    loggedIn: state.auth.user !== null,
    error: state.auth.error,
    user: state.auth.user,
    avatarChoice: state.toggles.avatarSlides.avatarChoice,
    addChild: state.toggles.sideNav.addChild
})
export const SignupFormChild = props => {
    let error;
    if(props.error) error = <div className='form-error'>{Object.values(props.error).join('\n')}</div>;
    return(
        <main className='child-signup-form'>
            <h3 className='child-signup-greeting'>Let's get started <span>{props.user.name}!</span></h3>
            <form className='child-signup'
            onSubmit={props.handleSubmit(inp => {
                        const {
                            signupName,
                            signupUsername, 
                            signupPassword,
                            signupConfirmPassword
                        } = inp;
                        props.dispatch(signupChild(
                            signupUsername,
                            signupName, 
                            signupPassword, 
                            signupConfirmPassword,
                            props.avatarChoice))
                        if(props.addChild) props.dispatch(toggleAddChild())
                    }
                )} >
                <h3 className='child-form-heading'>Add a Child Account</h3>
                <div className='signup-form-body'>
                    {error}
                    <label htmlFor='signupName'>Child's Name</label>
                    <Field component={Input}
                        name='signupName'
                        placeholder='ex. Sam Wiles'
                        type='text'
                        id='signupName'
                        validate={[required, nonEmpty, isTrimmed]} 
                        />
                    <label htmlFor='signupUsername'>child Username</label>
                    <Field component={Input}
                        name='signupUsername'
                        placeholder='ex. swiles'
                        type='text'
                        id='signupUsername'
                        validate={[required, nonEmpty, isTrimmed]} 
                        />
                    <label htmlFor='signupPassword'>child's password</label>
                    <Field component={Input}
                        name='signupPassword'
                        type='password'
                        id='signupPassword'
                        validate={[required, nonEmpty, isTrimmed]} 
                        />
                    <label htmlFor='signupConfirmPassword'>confirm child's password</label>
                    <Field component={Input}
                        name='signupConfirmPassword'
                        type='password'
                        id='signupConfirmPassword'
                        validate={[required, nonEmpty, matchesPassword]} 
                        />
                    <label htmlFor='avatarChoice' className='avatar-label'>choose an avatar</label>
                    <AvatarSlider />
                    <button className='login-btn'
                        type='submit'
                        disabled={props.pristine || props.submitting || props.avatarChoice === null}>
                        add child
                    </button>
                    <button className='cancel-signup'
                    type='button'
                    disabled={props.user.childId.length === 0}
                    onClick={() => props.dispatch(toggleAddChild())}>
                    cancel
                    </button>
                </div>
            </form>
        </main>
    )
};

export default reduxForm({
    form: 'child-signup',
    onSubmitFail: (errors, dispatch) => dispatch(focus('child-signup', 'signupName')),
    onSubmitSuccess: (error, dispatch) => dispatch(reset('child-signup'))
})(connect(mapStateToProps)(SignupFormChild));