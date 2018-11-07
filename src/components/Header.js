import { Logo } from './Logo';
import { MenuButton } from './MenuButton';
import React from 'react';
import '../styles/header.css'

export const Header = props => (
    <div className='header'>
        <div className='left-header'>
            <Logo />
        </div>
        <div className='right-header'>
            <MenuButton />
        </div>
    </div>
);