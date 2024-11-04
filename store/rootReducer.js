import { combineReducers } from "@reduxjs/toolkit";
import counterReducer from "./counterSlice";
import contentReducer from "./contentSlice";
import todoReducer from "./todoSlice";
import employeeSlice from "./employeSlice";
import postSlice from "./postSlice";

export default rootReducer = combineReducers({
    counter: counterReducer,
    content: contentReducer,
    todo: todoReducer,
    employees: employeeSlice,
    posts: postSlice,
});
