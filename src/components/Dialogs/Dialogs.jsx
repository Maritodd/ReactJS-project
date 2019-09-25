import React from 'react';
import s from './Dialogs.module.css';
import { NavLink } from 'react-router-dom';
import DialogItem from './DialogItem/DialogItem.jsx'
import MessageItem from './MessageItem/MessageItem.jsx'

function Dialogs(props) {
    let dialogsElement = props.state.dialogs.map(d => <DialogItem name={d.name} id={d.id} />);
    let messagesElement = props.state.messages.map(m => <MessageItem message={m.message} id={m.id} />);

    let newElementMail = React.createRef();

    let sendMail = () => {
        let text = newElementMail.current.value;
        alert(text);
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                {dialogsElement}
            </div>
            <div className={s.messages}>
                {messagesElement}

                <textarea ref={newElementMail}>32</textarea>
                <button onClick={sendMail}>Send</button>
            </div>
        </div>
    );
}

export default Dialogs;