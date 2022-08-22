import axios from "axios";

const settings = {
    withCredentials: true,
    headers: {
        "API-KEY": "db201859-ca8d-43e6-86f0-2e698d4710cf"
    }
}

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.1/',
    ...settings
})

export type LoginParamsType = {
    email: string,
    password: string,
    rememberMe: boolean,
    captcha: string
}

// api

export const authApi = {
    login(data: LoginParamsType) {
        return instance.post<ResponseType<{userId?: number}>>('auth/login', data)
    }
}

// types

export type ResponseType<D = {}> = {
    resultCode: number,
    messages: string[],
    data: D
}