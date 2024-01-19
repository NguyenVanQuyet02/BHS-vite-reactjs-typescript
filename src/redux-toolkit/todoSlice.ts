import { createSlice } from '@reduxjs/toolkit'

export interface ITodo {
  id: number
  text: string
  completed: boolean
}

interface ITodoState {
  todos: ITodo[]
}
const initialState: ITodoState = {
  todos: JSON.parse(localStorage.getItem('todos') || '{}'),
}
const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: (state:ITodoState, action: { type: string; payload: string }) => {
      state.todos.push({
        id: Math.floor(Math.random() * 1000) + 1,
        text: action.payload,
        completed: false,
      })
      localStorage.setItem('todos', JSON.stringify(state.todos))
    },
    toggleTodo: (state:ITodoState, action: { type: string; payload: number }) => {
      const todo = state.todos.find(todo => todo.id === action.payload)
      if (todo) {
        todo.completed = !todo.completed
        localStorage.setItem('todos', JSON.stringify(state.todos))
      }
    },
    removeTodo: (state:ITodoState, action: { type: string; payload: number }) => {
      const indexTodo = state.todos.findIndex(
        todo => todo.id === action.payload,
      )
      if (indexTodo >= 0) {
        state.todos.splice(indexTodo, 1)
        localStorage.setItem('todos', JSON.stringify(state.todos))
      }
    },
  },
})

export const { addTodo, toggleTodo, removeTodo } = todoSlice.actions
export default todoSlice.reducer
