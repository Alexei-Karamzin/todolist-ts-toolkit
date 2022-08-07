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

export type TodolistType = {
    id: string,
    title: string,
    addedDate: string,
    order: number
}

type ResponseType<D = {}> = {
    resultCode: number,
    messages: string[],
    data: D
}

export const todolistsApi = {
    getTodolists() {
        return instance.get<Array<TodolistType>>('todo-lists')
    },
    createTodolist() {
        return instance.post<ResponseType<{ item: TodolistType }>>('todo-lists', {title: 'AXIOS 01'})
    },
    deleteTodolist(id: string) {
        return instance.delete<ResponseType>(`todo-lists/${id}`)
    },
    updateTodolist(title: string, id: string) {
        return instance.put<ResponseType>(`todo-lists/${id}`, {title: title})
    }
}