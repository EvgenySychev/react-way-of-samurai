import axios from "axios";
import {ProfileType} from "../redux/profile-reducer";


const instance = axios.create({
    withCredentials:true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {"API-KEY": "6f9e9cbc-7a8e-4e53-ac34-b3e563cd5704"}

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
