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
    getAuth () {
        return instance.get(`auth/me`)
    },
    getProfile (userId:string|undefined) {
        return instance.get<ProfileType>(`profile/${userId}`)
    }
}
