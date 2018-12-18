import React from 'react';
import { connect } from 'react-redux';
import { FaArrowRight } from 'react-icons/fa';
import { FaArrowLeft } from 'react-icons/fa';
import '../styles/avatarSlider.css';
import { goToPrevSlide, goToNextSlide, chooseAvatar } from '../actions/toggles';

const mapStateToProps = state => ({
    avatars: state.toggles.avatarSlides.avatars,
    avatarIndex: state.toggles.avatarSlides.currentIndex,
    avatarChoice: state.toggles.avatarSlides.avatarChoice
})

const clicked = { 
    border: 'inset', 
    backgroundColor: 'rgb(0, 96, 96)',
    color: '#fff' }, unclicked = { backgroundColor: '#fff', border: 'outset' };

export const AvatarSlider = props => (
    <div className='slider'>
        <div className='slide'>
            <button type='button'
                onClick={() => props.dispatch(chooseAvatar(props.avatarIndex))}
                style={props.avatarChoice === props.avatarIndex ? clicked : unclicked}>
                <img src={props.avatars[props.avatarIndex]} 
                alt='avatar' />
            </button>
        </div>
        <div className='arrows'>
            <button type='button' 
                disabled={props.avatarIndex === 0}
                onClick={() => props.dispatch(goToPrevSlide())}>
                <FaArrowLeft />
            </button>
            <button type='button' 
                disabled={props.avatarIndex === props.avatars.length - 1}
                onClick={() => props.dispatch(goToNextSlide())}>
                <FaArrowRight />
            </button>
        </div>
    </div>
)

export default connect(mapStateToProps)(AvatarSlider);