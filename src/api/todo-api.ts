import axios from "axios";

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.1//',
    withCredentials: true,
    headers: {
        'API-KEY': 'a0b0281f-3202-48f7-82ae-8ad3bc3cf8ed'
    }
})

export const TodoApi = {
    getTodos() {
        return instance.get<Array<TodoType>>('todo-lists')
    },
    createTodo(title: string) {
        return instance.post<CommonResponseType<{item: TodoType}>>('todo-lists', {title})
    },
    deleteTodo(todolistId: string) {
        return instance.delete<CommonResponseType>(`todo-lists/${todolistId}`)
    },
    updateTodoTitle({todolistId, title}: { todolistId: string, title: string }) {
        return instance.put<CommonResponseType>(`todo-lists/${todolistId}`, {title})
    }
}

export type TodoType = {
    id:string,
    title:string,
    addedDate:string,
    order: number

}

export type CommonResponseType<T = {}> = {
    messages: string[];
    fieldsErrors: string[];
    resultCode: number;
    data: T
}

export type DeleteAndUpdateTodoPesponseType = {
	messages: string[];
	fieldsErrors: string[];
	resultCode: number;
    data: {};
}
