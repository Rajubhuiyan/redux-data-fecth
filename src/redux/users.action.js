import axios from "axios";

export const SHOW_USERS = 'SHOW_USERS';


export const getUsers  =  () => {
    return async(dispatch) => {
        axios.get('https://jsonplaceholder.typicode.com/todos/1')
        .then(res => {
            return {
                type: SHOW_USERS,
                data:res.data
            }
        })
    }
}