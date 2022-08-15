import { v1 } from "uuid";
import {
    addTodolistAC,
    changeTodolistFilterAC,
    changeTodolistTitleAC,
    removeTodolistAC, setTodolistAC, TodolistDomainType,
    todolistsReducer
} from "./todolists-reducer";

let todolistId1: string
let todolistId2: string
let startState: Array<TodolistDomainType>

beforeEach(() => {
    todolistId1 = v1()
    todolistId2 = v1()

    startState = [
        {id: todolistId1, title: 'test_1', addedDate: '', order: 0, filter: "all"},
        {id: todolistId2, title: 'test_2', addedDate: '', order: 0, filter: "all"}
    ]
})

test('correct todolist should be removed', ()=>{

    const endState = todolistsReducer(startState, removeTodolistAC(todolistId1))

    expect(endState.length).toBe(1)
    expect(endState[0].id).toBe(todolistId2)
})

test('correct todolist should be added', ()=>{

    const newTodolist = {id: 'todolistId3', title: 'NEW', addedDate: '', order: 0, filter: "all"}

    const endState = todolistsReducer(startState, addTodolistAC(newTodolist))

    expect(endState.length).toBe(3)
    expect(endState[0].title).toBe('NEW')
})

test('correct todolist should be changed title', ()=>{

    const endState = todolistsReducer(startState,changeTodolistTitleAC(todolistId2,'new title'))

    expect(endState.length).toBe(2)
    expect(endState[1].title).toBe('new title')
})

test('correct todolist changed filter', ()=>{

    const endState = todolistsReducer(startState, changeTodolistFilterAC('completed', todolistId2))

    expect(endState.length).toBe(2)
    expect(endState[1].filter).toBe('completed')
    expect(endState[0].filter).toBe('all')
})

test('correct todolist should be set to the state', ()=>{

    const endState = todolistsReducer([], setTodolistAC(startState))

    expect(endState.length).toBe(2)
})