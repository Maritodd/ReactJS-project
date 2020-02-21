const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState = {
    dialogs: [
        { id: 1, name: 'Viktor' },
        { id: 2, name: 'Yaroslav' },
        { id: 3, name: 'Illya' },
        { id: 4, name: 'Mary' },
        { id: 5, name: 'Arthur' },
        { id: 6, name: 'Olya' }
    ],
    messages: [
        { id: 1, message: 'Hey' },
        { id: 2, message: 'Hello' },
        { id: 3, message: 'Bitch' },
        { id: 4, message: 'Suck my dick' },
        { id: 5, message: 'bye' }
    ],
};

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
    case SEND_MESSAGE:
        let body = action.newMessageBody;
        return {
            ...state,
            messages: [...state.messages, {id: 6, message: body}],
        };
    default:
            return state;
    }
};

export const sendMessageCreator = (newMessageBody) => ({type: SEND_MESSAGE, newMessageBody});

export default dialogsReducer;
