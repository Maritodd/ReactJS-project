import React from 'react';
import s from './../Navbar.module.css';
import {NavLink} from 'react-router-dom';

function Friends(props) {
    let path = '/friends/' + props.id;
    return (
        <div className={s.dialog} >
            <div className={s.dialogBlock}>
                <img src='https://www.w3schools.com/howto/img_avatar.png' />
                <NavLink className={s.dialogsItem} to={path}>{props.name}</NavLink>
            </div>
        </div>
    );
}

export default Friends;