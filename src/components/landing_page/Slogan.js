import { Link } from 'react-router-dom';
import React from 'react';
import '../../styles/slogan.css';

export const Slogan = props => (
    <hgroup className='slogan'>
        <h3 className='innovate'><span><Link to='/signup_parent'>Innovate</Link></span> how you reward good behavior...</h3>
        <h3 className='incentivize'><span><Link to='/signup_parent'>Incentivize</Link></span> great work ethic...</h3>
        <h2 className='tag'>give your kids what they deserve!<br /><span><Link to='/signup_parent'>Sign up now.</Link></span></h2>
    </hgroup>
);