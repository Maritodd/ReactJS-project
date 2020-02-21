import {profileAPI} from "../components/api/api";


const ADD_POST = 'ADD-POST';
const SET_USERS_PROFILE = 'SET_USERS_PROFILE';
const SET_STATUS = 'SET_STATUS';


let initialState = {
    posts: [
        {id: 1, message: 'Hello, I am learning ReactJS.', likesCount: 1},
        {id: 2, message: 'Hey it is my first post.', likesCount: 21},
        {id: 3, message: 'Hey it is my second post.', likesCount: 211}
    ],
    profile: null,
    status: ""
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 4,
                message: action.newPostText,
                likesCount: 0
            };
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: ''
            };
        case SET_USERS_PROFILE:
            return {...state, profile: action.profile};
            case SET_STATUS:
            return {...state, status: action.status};

        default:
            return state;
    }
};

export const addPostActionCreator = (newPostText) => ({type: ADD_POST, newPostText});
export const setUsersProfile = (profile) => ({type: SET_USERS_PROFILE, profile});
export const setUserStatus = (status) => ({type: SET_STATUS , status});

export const getUsersProfile = (userId) => {
    return (dispatch) => {
        profileAPI.getProfiles(userId)
            .then(response => {
                dispatch(setUsersProfile(response.data));
            });
    }
};

export const getUserStatus = (userId) => {
    return (dispatch) => {
        profileAPI.setStatus(userId)
            .then(response => {
                dispatch(setUserStatus(response.data));
            });
    }
};

export const updateUserStatus = (status) => {
    return (dispatch) => {
        profileAPI.updateStatus(status)
            .then(response => {
                if (!response.data.resultCode === 1) {
                    dispatch(setUserStatus(response.data));
                }
            });
    }
};

export default profileReducer;