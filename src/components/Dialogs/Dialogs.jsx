import React from 'react';
import s from './Dialogs.module.css';
import { NavLink } from 'react-router-dom';
import DialogItem from './DialogItem/DialogItem.jsx'
import MessageItem from './MessageItem/MessageItem.jsx'
import { sendMessageCreator, updateNewMessageCreator } from '../../redux/dialogs-reducer';

function Dialogs(props) {
    
    let state = props.dialogsPage;

    let dialogsElement = state.dialogs.map(d => <DialogItem name={d.name} id={d.id} />);
    let messagesElement = state.messages.map(m => <MessageItem message={m.message} id={m.id} />);
    let newMessageBody = state.newMessageBody;
    
    let onSendMessageClick = () => {
        props.sendMessage();
    }
    
    let onNewMessageUpdate = (e) => {
        let body = e.target.value;
        props.newMessageUpdateBody(body);
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                {dialogsElement}
            </div>
            <div className={s.messages}>
                <div>{messagesElement}</div>
                <div>
                    <textarea onChange={onNewMessageUpdate} value={newMessageBody} 
                            placeholder="Enter your message..."></textarea>
                </div>
                <div>
                    <button onClick={onSendMessageClick}>Send</button>
                </div>
            </div>
        </div>
    );
}

export default Dialogs;