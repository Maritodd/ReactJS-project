import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem.jsx'
import MessageItem from './MessageItem/MessageItem.jsx'
import {Field, reduxForm} from "redux-form";
import AddNewMessageReduxForm from "./AddNewMessageForm/AddNewMessageForm";


function Dialogs(props) {

    let state = props.dialogsPage;

    let dialogsElement = state.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>);
    let messagesElement = state.messages.map(m => <MessageItem message={m.message} id={m.id}/>);
    let newMessageBody = state.newMessageBody;

    let onSendMessage = (values) => {
        props.sendMessage(values.newMessageBody);
    };

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                {dialogsElement}
            </div>
            <div className={s.messages}>
                <div>{messagesElement}</div>
               <AddNewMessageReduxForm onSubmit={onSendMessage}/>
            </div>
        </div>
    );
}

export default Dialogs;