import * as axios from 'axios';

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    "API-KEY":'28edbee1-c38f-4aa9-98db-ce5f71f20de0',

});

export const usersAPI = {
    getUsers(page = 1, pageSize = 10) {
        return instance.get(`users?page=${page}&count=${pageSize}`)
            .then(response => response.data)
    },

    follow(userId) {
        return instance.post(`follow/${userId}`, {})
    },


    unfollow(userId) {
        return instance.delete(`follow/${userId}`)
    },

    getProfile(userId) {
        console.warn('use old method, please, use profileAPI');
        return profileAPI.getProfile(userId);
    },

    getAuthData() {
        return instance.get(`auth/me`)
    }
};


export const profileAPI = {
    getProfile(userId) {
        return instance.get(`profile/${userId}`)
    },
    getStatus(userId) {
        return instance.get(`profile/status/${userId}`)
    },
    upDateStatus(status) {
        return instance.put(`profile/status`, { status: status })
    }
};
