const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USERS_PROFILE = 'SET_USERS_PROFILE';

let initialState = {
    posts: [
        {id: 1, message: 'Hello, I am learning ReactJS.', likesCount: 1},
        {id: 2, message: 'Hey it is my first post.', likesCount: 21},
        {id: 3, message: 'Hey it is my second post.', likesCount: 211}
    ],
    newPostText: '',
    profile: null
};

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
        case SET_USERS_PROFILE:
            return {...state, profile: action.profile};
        default:
            return state;
    }
};

export const addPostActionCreator = () => ({type: ADD_POST});
export const setUsersProfile = (profile) => ({type: SET_USERS_PROFILE, profile});
export const updateNewPostChangeCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text});

export default profileReducer;