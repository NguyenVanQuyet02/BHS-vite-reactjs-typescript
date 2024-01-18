import { createStore, combineReducers } from 'redux'
import todoReducer from './todo'
import authReducer from './auth'

const reducer = combineReducers({
    todos: todoReducer,
    auth: authReducer
})

const store = createStore(reducer)

export default store

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
