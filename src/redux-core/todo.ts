const ADDTODO: string = 'addtodo';
const TOGGLETODO: string = 'toggletodo';
const DELETETODO: string = 'deletetodo';


export interface ITodo {
    id: number
    text: string
    completed: boolean
}

interface ITodoState {
    todos: ITodo[]
}

const initialState: ITodoState = {
    todos: JSON.parse(localStorage.getItem("todos") || "[]")
}

export const addtodo = (text: string) => ({
    type: ADDTODO,
    payload: text
})

export const toggletodo = (id: number) => ({
    type: TOGGLETODO,
    payload: id
})
export const deleteTodo = (id: number) => ({
    type: DELETETODO,
    payload: id
})
const todoReducer = (state = initialState, action: { type: string; payload: string }) => {
    switch (action.type) {
        case ADDTODO:
            const newTodo = {
                id: Math.floor(Math.random() * 1000) + 1,
                text: action.payload,
                completed: false,
            }
            localStorage.setItem("todos", JSON.stringify([...state?.todos, newTodo]))
            return {
                todos: [
                    ...state?.todos,
                    newTodo
                ]
            }
        case TOGGLETODO:
            const todo = state?.todos.find(todo => +todo.id === +action.payload)
            if (todo) {
                todo.completed = !todo.completed
            }
            localStorage.setItem("todos", JSON.stringify(state?.todos))
            return { todos: [...state?.todos] }
        case DELETETODO:
            const indexTodo = state?.todos.findIndex(
                todo => +todo.id === +action.payload,
            )
            if (indexTodo >= 0) {
                state?.todos.splice(indexTodo, 1)
                localStorage.setItem('todos', JSON.stringify(state?.todos))
            }
            return {
                todos: [...state?.todos]
            }
        default:
            return state
    }
}

export default todoReducer