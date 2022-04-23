import { ERR_USERS, LOADING_USERS, SHOW_USERS } from "./users.action";



export function usersReducers(state = [], action){
    switch (action.type) {
        case LOADING_USERS:
            return action
        case SHOW_USERS:
            return action
        case ERR_USERS:
            return action
        default:
           return state
    }
}