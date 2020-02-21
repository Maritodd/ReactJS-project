import {usersAPI} from "../components/api/api";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_COUNT = 'SET_TOTAL_COUNT';
const LOADER_IS_FETCHING = 'LOADER_IS_FETCHING';
const FOLLOWING_PROGRESS = 'FOLLOWING_PROGRESS';

let initialState = {
    users: [],
    totalUsersCount: 0,
    pageSize: 100,
    currentPage: 1,
    isFetching: true,
    isfollowingProgress: []
};

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u;
                })
            };
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u;
                })
            };
        case SET_USERS: {
            return {...state, users: action.users};
        }
        case SET_CURRENT_PAGE: {
            return {...state, currentPage: action.currentPage};
        }
        case SET_TOTAL_COUNT: {
            return {...state, totalUsersCount: action.count};
        }
        case LOADER_IS_FETCHING: {
            return {...state, isFetching: action.isFetching};
        }
        case FOLLOWING_PROGRESS: {
            return {
                ...state, isfollowingProgress: action.isFetching
                    ? [...state.isfollowingProgress, action.userId]
                    : state.isfollowingProgress.filter(id => id != action.userId)
            };
        }
        default:
            return state;
    }
};

export const followSucces = (userId) => ({type: FOLLOW, userId});
export const unfollowSucces = (userId) => ({type: UNFOLLOW, userId});
export const setUsers = (users) => ({type: SET_USERS, users});
export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage});
export const setTotalCount = (totalUsersCount) => ({type: SET_TOTAL_COUNT, count: totalUsersCount});
export const loaderIsFetching = (isFetching) => ({type: LOADER_IS_FETCHING, isFetching});
export const togglefollowingProgress = (isFetching, userId) => ({type: FOLLOWING_PROGRESS, isFetching, userId});

export const getUsers = (currentPage, pageSize) => {
    return (dispatch) => {
        dispatch(loaderIsFetching(true));

        usersAPI.getUser(currentPage, pageSize).then(data => {
            dispatch(loaderIsFetching(false));
            dispatch(setUsers(data.items));
            dispatch(setTotalCount(data.totalCount));
        });
    }
};

export const unfollow = (userId) => {
    return (dispatch) => {
        dispatch(togglefollowingProgress(true, userId));

        usersAPI.getUnFollow(userId)
            .then(data => {
                if (data.resultCode === 0) {
                    dispatch(unfollowSucces(userId));
                }
                dispatch(togglefollowingProgress(false, userId));
            });
    }
};

export const follow = (userId) => {
    return (dispatch) => {
        dispatch(togglefollowingProgress(true, userId));

        usersAPI.getFollow(userId)
            .then(data => {
                if (data.resultCode === 0) {
                    dispatch(followSucces(userId));
                }
                dispatch(togglefollowingProgress(false, userId));
            });
    }
};


export default usersReducer;
