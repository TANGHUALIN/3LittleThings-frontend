import {combineReducers } from "@reduxjs/toolkit";
import userReducer from "./modules/user";
import diaryReducer from "./modules/diary";

const rootReducer = combineReducers({
    user: userReducer,
    diary: diaryReducer,
  });
  export default rootReducer
