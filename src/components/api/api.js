import * as axios from 'axios';

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/', // auto push to link
    "API-KEY":'b785b553-c9d8-4045-8027-f8b9d6fe1d19',

})

export const getUsers = (page, pageSize) => {
    return instance.get(`users?page=${page}&count=${pageSize}`)
        .then(response => response.data)
}
