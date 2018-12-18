import React from 'react';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
    avatars: state.toggles.avatarSlides.avatars,
})
export const Avatar = props => (
    <img src={props.avatars[props.avatar]} 
        alt='avatar'
        className='avatar' />
);

export default connect(mapStateToProps)(Avatar)