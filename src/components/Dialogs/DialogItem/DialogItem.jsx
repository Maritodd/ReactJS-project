import React from 'react';
import s from './../Dialogs.module.css';
import { NavLink } from 'react-router-dom';

function DialogItem(props) {
    let path = '/dialogs/' + props.id;
    return (
        <div className={s.dialog} >
            <div className={s.dialogBlock}>
                <img src='https://www.w3schools.com/howto/img_avatar.png' />
                <NavLink className={s.dialogsItem} to={path}>{props.name}</NavLink>
            </div>
        </div>
    );
}

export default DialogItem;