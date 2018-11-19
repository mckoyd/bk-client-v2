import { Logo } from './Logo';
import { FiPlusSquare } from 'react-icons/fi';
import React from 'react';
import '../styles/header.css'

export const Header = props => (
    <header className='header'>
        <div className='left-header'>
            <Logo />
        </div>
        <div className='right-header'>
            <FiPlusSquare />
        </div>
    </header>
);