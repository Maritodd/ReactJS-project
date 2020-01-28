import React from 'react';
import { sendMessageCreator, updateNewMessageCreator } from '../../redux/dialogs-reducer';
import Dialogs from './Dialogs';
import { connect } from 'react-redux';

// function DialogsContainer(props) {
    
//     let state = props.store.getState().dialogsPage;

//     let onSendMessageClick = () => {
//         props.store.dispatch(sendMessageCreator());
//     }

//     let onNewMessageUpdate = (body) => {
//         props.store.dispatch( updateNewMessageCreator(body));
//     }

//     return (
//        <Dialogs sendMessage={onSendMessageClick} newMessageUpdateBody={onNewMessageUpdate} dialogsPage={state} />
//     );
// }

let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        newMessageUpdateBody: (body) => { 
            dispatch(updateNewMessageCreator(body));
        },
        sendMessage: () => { 
            dispatch(sendMessageCreator());
        }
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps) (Dialogs);

export default DialogsContainer;