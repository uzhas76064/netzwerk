import axios from 'axios';

const axiosInstance = axios.create({
    withCredentials: true,
    baseURL: `https://social-network.samuraijs.com/api/1.0/`,
    headers: {
        'API-KEY': 'ef9b2af2-1191-4a88-9505-af9dd2588060'
    }
})

export class UserAPI {
    getUsers = (currentPage, pageSize) => {
        return axiosInstance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data)
    }
}

export class FollowAPI {
    follow = (userId) => {
        return axiosInstance.post(`follow/${userId}`)
    }

    unfollow = (userId) => {
        return axiosInstance.delete(`follow/${userId}`)
    }
}