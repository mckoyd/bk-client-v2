import { connect } from 'react-redux';
import { Logo } from './Logo';
import { FiPlusSquare } from 'react-icons/fi';
import React from 'react';
import SideNav from './SideNav';
import '../styles/header.css'
import { toggleSideNav } from '../actions/toggles';

const Header = props => (
    <header className='header'>
        <div className='left-header'>
            <Logo />
        </div>
        <div className='right-header'>
            <FiPlusSquare onClick={() => props.dispatch(toggleSideNav())}/>
        </div>
        <SideNav />
    </header>
);

export default connect()(Header);