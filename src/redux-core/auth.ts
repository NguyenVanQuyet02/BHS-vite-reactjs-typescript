const SAVETOKEN = 'savetoken';
const DELETETOKEN = 'deletetoken';


const token: string = ""

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
            return state = action.payload
        case DELETETOKEN:
            return state = ""
        default:
            return state
    }
}

export default authReducer