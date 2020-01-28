import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";

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

    subscribe(observer) {
        this._callSubscriber = observer;
    },
    dispatch(action) {
        
            this._state.profilePage = profileReducer(this._state.profilePage, action);
            this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
            this._state.sidebar = sidebarReducer(this._state.sidebar, action);

            this._callSubscriber(this._state);
        }
}

export default store;
window.store = store;