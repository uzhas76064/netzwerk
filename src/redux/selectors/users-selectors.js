export const getUsersSelector = (state) => {
    return state.usersPage.users;
}

export const getPageSize = (state) => {
    return state.usersPage.pageSize;
}

export const getTotalUsersCount = (state) => {
    return state.usersPage.totalUsersCount;
}

export const getCurrentPage = (state) => {
    return state.usersPage.currentPage;
}

export const fetching = (state) => {
    return state.usersPage.isFetching;
}

export const following = (state) => {
    return state.usersPage.isFollowing;
}

export const toggleFollowing = (state) => {
    return state.usersPage.toggleIsFollowing;
}