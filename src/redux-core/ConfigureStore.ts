import { createStore, combineReducers } from 'redux'
import todoReducer from './todo'

const reducer = combineReducers({
    todos: todoReducer
})

const store = createStore(reducer)

export default store

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
