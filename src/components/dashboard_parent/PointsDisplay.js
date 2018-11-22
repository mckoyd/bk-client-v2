import React from 'react';

export const coin = require('../../images/coin_icon.png');
const trophy = require('../../images/trophy_icon.png');
export const PointsDisplay = props => (
    <p className='points'>
        <span>{props.currentPoints}</span>
        <img className='coin' src={coin} alt='coin' />
        <span>{props.totalPoints}</span>
        <img src={trophy} alt='trophy' />
    </p>
);