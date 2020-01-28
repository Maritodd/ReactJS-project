const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
    posts: [
        { id: 1, message: 'Hello, I am learning ReactJS.', likesCount: 1 },
        { id: 2, message: 'Hey it is my first post.', likesCount: 21 },
        { id: 3, message: 'Hey it is my second post.', likesCount: 211 }
    ],
    newPostText: ''
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
        let newPost = {
            id: 4,
            message: state.newPostText,
            likesCount: 0
        };
        return {
            ...state,
            posts: [...state.posts, newPost],
            newPostText: ''
        };
    case UPDATE_NEW_POST_TEXT:
        return {
            ...state,
            newPostText: action.newText
        };
    default: 
        return state;
    }
}

export const addPostActionCreator = () => ({type: ADD_POST})
export const updateNewPostChangeCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text})

export default profileReducer;