
//initial state
const initialState = {
    username: '',
    user_id: '',
    profile_img: ''
}

//const strings
export const UPDATE_USER_NAVBAR = 'UPDATE_USER_NAVBAR'

//functions
export function updateUserNavbar(user_id, username, profile_img){
    return {
        type: UPDATE_USER_NAVBAR,
        payload: {
            user_id,
            username,
            profile_img
        }
    }
}

//reducer
export default function reducer(state = initialState, action) {
    const { type, payload } = action
    switch(type){
        case UPDATE_USER_NAVBAR:
            return {
                ...state,
                user_id: payload.user_id,
                username: payload.username,
                profile_img: payload.profile_img
            }
        default: return state;
    }
}