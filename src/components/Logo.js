import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/bonusKid.png';

export const Logo = props => (
    <Link to='/'>
        <img src={logo} alt='BonusKid written in cursive' />
    </Link>
);