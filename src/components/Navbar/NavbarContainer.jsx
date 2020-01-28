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
}

const mapDispatchToProps = () => {}

const NavbarContainer = connect(mapStateToProps, mapDispatchToProps) (Navbar);

export default NavbarContainer;