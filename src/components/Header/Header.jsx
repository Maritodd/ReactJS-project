import React from 'react';
import s from './Header.module.css';

function Header() {
    return (
        <header className={s.header}>
            <img src='.\logo192.png' alt='logo' />
        </header>
    );
}

export default Header;