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
            .then(response => response.data);
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

export class HeaderAPI {
    doAuth = () => {
        return axiosInstance.get(`auth/me`)
            .then(response => response.data);
    }

    login = (email, password, rememberMe = false) => {
        return axiosInstance.post('auth/login', {email, password, rememberMe});
    }

    logout = () => {
        return axiosInstance.delete('auth/login');
    }
}

export class ProfileAPI {
    fetchProfile = (userId) => {
        return axiosInstance.get(`profile/${userId}`)
    }

    getStatus = (userId) => {
        return axiosInstance.get(`profile/status/${userId}`)
    }

    updateStatus = (status) => {
        return axiosInstance.put(`profile/status/`, {status})
    }

    uploadPhoto = (photo) => {
        const formData = new FormData();
        formData.append('image', photo);

        return axiosInstance.put(`profile/photo`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
    }
}