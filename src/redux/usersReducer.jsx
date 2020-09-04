const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS';

let initialState = {
    users: [
        {id: 1, avatar: 'https://img.icons8.com/doodle/48/000000/user.png', followed: false, fullName: 'Dmitry', status: 'Im a boss', location: {city: 'Minsk', state: 'Belarus'}},
        {id: 2, avatar: 'https://img.icons8.com/doodle/48/000000/user.png', followed: true, fullName: 'Sasha', status: 'Im a boss', location: {city: 'Moscow', state: 'Russia'}},
        {id: 3, avatar: 'https://img.icons8.com/doodle/48/000000/user.png', followed: false, fullName: 'Andrew', status: 'Im a boss', location: {city: 'Kiev', state: 'Ukraine'}},
        {id: 4, avatar: 'https://img.icons8.com/doodle/48/000000/user.png', followed: true, fullName: 'Pavel', status: 'Im a boss', location: {city: 'Minsk', state: 'Belarus'}},
    ]
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(user => {
                    if (user.id === action.userId) {
                        return {...user, followed: true}
                    }
                    return user;
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map((user) => {
                    if (user.id === action.userId) {
                        return {...user, followed: false}
                    }
                    return user
                })
            }
        case SET_USERS:
            return {
                ...state,
                users: [...state.users, ...action.users]
            }
        default:
            return state;
    }
}

export const followAC = (userId) => ({type: FOLLOW, userId});
export const unfollowAC = (userId) => ({type: UNFOLLOW, userId});
export const setUsersAC = (users) => ({type: SET_USERS, users})

export default usersReducer;