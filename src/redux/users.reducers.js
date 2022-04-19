import { SHOW_USERS } from "./users.action";



export function usersReducers(state = [], action){
    switch (action.type) {
        case SHOW_USERS:
            
            return action
    
        default:
           return state
    }
}