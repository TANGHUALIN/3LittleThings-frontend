import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./modules/user";
import diaryReducer from "./modules/diary";
export default configureStore(
    {
        reducer:{
            user:userReducer,
            diary:diaryReducer,
        }
    }
)