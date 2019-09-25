import React from 'react';
import s from './../Dialogs.module.css';


function MessageItem(props) {
    return (
        <div className={s.message}>
            <div className={s.messageBlock}>
                <img src='https://www.w3schools.com/howto/img_avatar.png' />
                <div className={s.messageItem}>{props.message}</div>
            </div>
        </div>
    );
}

export default MessageItem;