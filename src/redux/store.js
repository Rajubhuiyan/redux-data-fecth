import { applyMiddleware } from "redux";
import { createStore } from "redux"
import thunk from "redux-thunk";
import { usersReducers } from "./users.reducers"


export const store = createStore(usersReducers,applyMiddleware(thunk));