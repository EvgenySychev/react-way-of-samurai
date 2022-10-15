import axios, {AxiosResponse} from "axios";
import {ProfileType} from "../redux/profile-reducer";


const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {"API-KEY": "6f9e9cbc-7a8e-4e53-ac34-b3e563cd5704"}

})

export const usersAPI = {
    getUsers(currentPages: number, pageSize: number) {
        return instance.get(`users?page=${currentPages}&count=${pageSize}`)
            .then(response => {
                return response.data
            })
    },

    follow(userId: number) {
        return instance.post(`https://social-network.samuraijs.com/api/1.0/follow/${userId}`)
    },
    unfollow(userId: number) {
        return instance.delete(`https://social-network.samuraijs.com/api/1.0/follow/${userId}`
        )
    },
    getProfile(userId: number) {
        return profileAPI.getProfile(userId)
    },
}

export const profileAPI = {
    getProfile(userId: number) {
        return instance.get<ProfileType>(`profile/${userId}`)
    },
    getStatus(userId: number) {
        return instance.get<string>(`profile/status/${userId}`)
    },
    updateStatus(status: string) {
        return instance.put<any>(`profile/status/`, {status: status}) //проверить типизацию
    },
    savePhoto(photoFile: string | Blob) {
        const formData = new FormData()
        formData.append('image', photoFile)
        return instance.put<any>(`profile/photo`, photoFile, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
    },
    upDateProfile(data: upDateProfileType) {
        return instance.put<any>('profile', data)
    }
}

export const authAPI = {
    me() {
        return instance.get(`auth/me`)
    },
    login(data: LoginParamsType) {
        return instance.post<LoginParamsType, AxiosResponse<ResponseType<{ userId: number }>>>('auth/login', data)
    },
    logout() {
        return instance.delete(`auth/login`)
    },
}

export type LoginParamsType = {
    email: string
    password: string
    rememberMe?: boolean
    captcha?: string
}

export type ResponseType<D = {}> = {
    resultCode: number
    messages: Array<string>
    data: D
}

export type upDateProfileType = {
    lookingForAJob: boolean
    lookingForAJobDescription: string
    aboutMe: string
    fullName: string
    contacts: {
        github: string
        vk: string
        facebook: string
        instagram: string
        twitter: string
        website: string
        youtube: string
        mainLink: string
    }
}
