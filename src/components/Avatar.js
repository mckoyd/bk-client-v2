import React from 'react';

const avatars = [
    require('../images/avatars/boy1.png'), 
    require('../images/avatars/boy2.png'),
    require('../images/avatars/boy3.png'),
    require('../images/avatars/boy4.png'),
    require('../images/avatars/boy5.png'),
    require('../images/avatars/boy6.png'),
    require('../images/avatars/girl1.png'),
    require('../images/avatars/girl2.png'),
    require('../images/avatars/girl3.png'),
    require('../images/avatars/girl4.png') 
    ]
export const Avatar = props => (
    <img src={avatars[Math.floor(Math.random()*avatars.length)]} 
        alt='avatar'
        className='avatar' />
);