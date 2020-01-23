const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

const SEND_MESSAGE = 'SEND-MESSAGE';
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';

let store = {
    _state: {
        profilePage: {
            posts: [
                { id: 1, message: 'Hello, I am learning ReactJS.', likesCount: 1 },
                { id: 2, message: 'Hey it is my first post.', likesCount: 21 },
                { id: 3, message: 'Hey it is my second post.', likesCount: 211 }
            ],
            newPostText: ''
        },
        dialogsPage: {
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
            newMessageBody: ''
        },
        sidebar: {
            friends: [
                { id: 1, name: 'Viktor' },
                { id: 2, name: 'Yaroslav' },
                { id: 3, name: 'Illya' },
                // { id: 4, name: 'Mary' },
                // { id: 5, name: 'Arthur' },
                // { id: 6, name: 'Olya' }
            ],
        }
    }, 

    getState() {
        return this._state;
    },
    _callSubscriber() {
        console.log('State changed');
    }, 

    subsribe(observer) {
        this._callSubscriber = observer;
    },
    dispatch(action) {
        if (action.type === ADD_POST) {
            let newPost = {
                id: 4,
                message: this._state.profilePage.newPostText,
                likesCount: 0
            };
            
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = '';
            this._callSubscriber(this._state);
        } else if (action.type === UPDATE_NEW_POST_TEXT) {
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state);
        } else if (action.type === SEND_MESSAGE) {
            let body = this._state.dialogsPage.newMessageBody;
            this._state.dialogsPage.newMessageBody = '';
            this._state.dialogsPage.messages.push({id: 6, message: body});
            this._callSubscriber(this._state);
        } else if (action.type === UPDATE_NEW_MESSAGE_BODY) {
            this._state.dialogsPage.newMessageBody = action.body;
            this._callSubscriber(this._state);
        }
    }
}

export const addPostActionCreator = () => ({type: ADD_POST})
export const updateNewPostChangeCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text})

export const sendMessageCreator = () => ({type: SEND_MESSAGE})
export const updateNewMessageCreator = (body) => ({type: UPDATE_NEW_MESSAGE_BODY, body: body})


export default store;
window.store = store;