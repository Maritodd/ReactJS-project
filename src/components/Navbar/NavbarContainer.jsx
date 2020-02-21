import React from 'react';
import s from './Navbar.module.css';
import {NavLink} from 'react-router-dom';
import Friends from './Friends/Friends'
import Navbar from './Navbar';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
    return {
        sidebar: state.sidebar
    }
};

const NavbarContainer = connect(mapStateToProps) (Navbar);

export default NavbarContainer;