import { connect } from 'react-redux';
import LoginFormChild from './LoginFormChild';
import LoginFormParent from './LoginFormParent';
import React from 'react';
import { toggleLoginChoice } from '../../actions/toggles';
import '../../styles/login-forms.css'


const mapStateToProps = state => ({
    parentLogin: state.toggles.loginChoice.parent,
    childLogin: state.toggles.loginChoice.child
});
export const LoginForms = props => {
    const clicked = { 
        border: 'inset', 
        backgroundColor: 'rgb(0, 96, 96)',
        color: '#fff' }, unclicked = { backgroundColor: '#fff', border: 'outset' };
    return(
        <section className='login-forms'>
            <div className='login-choice'>
                <button className='parent-choice'
                    type='button'
                    onClick={() => props.dispatch(toggleLoginChoice())}
                    disabled={props.parentLogin}
                    style={props.parentLogin ? clicked : unclicked}>parent</button>
                <button className='child-choice'
                    type='button'
                    onClick={() => props.dispatch(toggleLoginChoice())}
                    disabled={props.childLogin}
                    style={props.childLogin ? clicked : unclicked}>child</button>
            </div>
            {props.parentLogin ? <LoginFormParent /> : <LoginFormChild />}
        </section>
    );
}

export default connect(mapStateToProps)(LoginForms);

