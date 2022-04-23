import axios from "axios";

export const SHOW_USERS = 'SHOW_USERS';
export const LOADING_USERS = 'DEFAULT';
export const ERR_USERS = 'ERR_USERS';

export const getUsers  =  () => {
    return async(dispatch) => {
        dispatch({
            type:LOADING_USERS,
            loading: true,
        })
       await axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(res => {
            dispatch({type: SHOW_USERS,data:res.data,loading:false })
        })
        .catch(err => {
            dispatch({type:ERR_USERS,loading:false,errMessage:err.message})
        })
        
    }
}