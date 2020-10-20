import {FollowAPI, UserAPI} from "../api/api";
import {alterArray} from "../utils/alterArray";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_USERS_TOTAL_COUNT = 'SET_USERS_TOTAL_COUNT';
const SET_PRELOADER = 'SET_PRELOADER';

let usersAPI = new UserAPI();
let followAPI = new FollowAPI();

let initialState = {
    users: [],
    pageSize: 5,
    totalUsersCount: 1000,
    currentPage: 1,
    isFetching: true,
    isFollowing: []
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: alterArray(state.users, action.userId, 'id', {followed: true})
            }
        case UNFOLLOW:
            return {
                ...state,
                users: alterArray(state.users, action.userId, 'id', {followed: false})
            }
        case SET_USERS:
            return {
                ...state,
                users: action.users
            }
        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.currentPage
            }
        case SET_USERS_TOTAL_COUNT:
            return {
                ...state,
                totalUsersCount: action.totalCount
            }
        case SET_PRELOADER:
            return {
                ...state,
                isFetching: action.isFetching
            }
        default:
            return state;
    }
}

export const followSuccess = (userId) => ({type: FOLLOW, userId});
export const unfollowSuccess = (userId) => ({type: UNFOLLOW, userId});
export const setUsers = (users) => ({type: SET_USERS, users});
export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage});
export const setUsersTotalCount = (totalCount) => ({type: SET_USERS_TOTAL_COUNT, totalCount});
export const setPreloader = (isFetching) => ({type: SET_PRELOADER, isFetching});

export const getUsers = (currentPage, pageSize) => {
    return (dispatch) => {
        dispatch(setPreloader(true));
        dispatch(setCurrentPage(currentPage));
        usersAPI.getUsers(currentPage, pageSize)
            .then(data => {
                dispatch(setPreloader(false));
                dispatch(setUsers(data.items));
                setUsersTotalCount(data.totalCount)
            })
    }
}

export const follow = (userId) => async (dispatch) => {
    let response = await followAPI.follow(userId)
    if (response.data.resultCode === 0) {
        dispatch(followSuccess(userId));
    }
}

export const unfollow = (userId) => async (dispatch) => {
    let response = await followAPI.unfollow(userId)
    if (response.data.resultCode === 0) {
        dispatch(unfollowSuccess(userId));
    }
}

export default usersReducer;