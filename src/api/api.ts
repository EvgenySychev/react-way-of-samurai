import axios from "axios";
import {ProfileType} from "../redux/profile-reducer";


const instance = axios.create({
    withCredentials:true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {"API-KEY": "6e03d1d2-7960-47f3-925c-f3ab55ba6937"}

})

export const usersAPI = {
    getUsers (currentPages:number,pageSize:number) {
        return instance.get(`users?page=${currentPages}&count=${pageSize}`)
            .then(response => {
                return response.data
            })
    },

    getProfile (userId:number) {
        return instance.get<ProfileType>(`profile/${userId}`)
    },
    follow (userId:number) {
return instance.post(`https://social-network.samuraijs.com/api/1.0/follow/${userId}`)
    },
    unfollow (userId:number) {
        return instance.delete(`https://social-network.samuraijs.com/api/1.0/follow/${userId}`
        )
    },
}

export const authAPI = {
    me() {
        return instance.get(`auth/me`)
    }
}
