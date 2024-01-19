const SAVETOKEN = 'savetoken';
const DELETETOKEN = 'deletetoken';


const token: string = JSON.parse(localStorage.getItem('token') || "[]")

export const saveToken = (token: string) => ({
    type: SAVETOKEN,
    payload: token
})
export const deleteToken = () => ({
    type: DELETETOKEN
})

const authReducer = (state = token, action: { type: string; payload: string }) => {
    switch (action.type) {
        case SAVETOKEN:
            state = action.payload
            localStorage.setItem('token',JSON.stringify(state))
            return state;
        case DELETETOKEN:
            state = ""
            localStorage.setItem('token',JSON.stringify(state))
            return state;
        default:
            return state
    }
}

export default authReducer