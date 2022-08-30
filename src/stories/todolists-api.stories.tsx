import React, {useEffect, useState} from 'react'
import {TodoApi} from "../api/todo-api";
import axios from "axios";
import {instance} from "@storybook/node-logger";


export default {
    title: 'API'
}

const settings = {
    withCredentials: true,
    headers: {
        'API-KEY': 'a0b0281f-3202-48f7-82ae-8ad3bc3cf8ed'
    }
}

export const GetTodolists = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
       TodoApi.getTodos()
            .then((res)=>{
                setState(res.data)
            })
    }, [])
    return <div>{JSON.stringify(state)}</div>
}
export const CreateTodolist = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        const title = 'React13'
       TodoApi.createTodo(title)
        .then((res)=>{
               setState(res.data)
           })
    }, [])

    return <div>{JSON.stringify(state)}</div>
}
export const DeleteTodolist = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        const todolistId = '9ebb384c-e552-4112-9d4a-8cdcf34f34a6'
        TodoApi.deleteTodo(todolistId)
            .then((res)=>
            setState(res.data))
    }, [])

    return <div>{JSON.stringify(state)}</div>
}
export const UpdateTodolistTitle = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        const todolistId = 'e5ae2128-670d-4e55-a3df-da6fe57b769c'
        const title = 'React'
        TodoApi.updateTodoTitle({title, todolistId})
            .then((res) => {
                setState(res.data)
            })
    }, [])

    return <div>{JSON.stringify(state)}</div>
}

