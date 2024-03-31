import { createSlice } from "@reduxjs/toolkit";
import { request,setToken as setTokenInLocal,getToken } from "../../utils";
import { loginAPI, getUidAPI } from "../../apis/userAPI";

const diaryStore=createSlice(
    {
        name:"diary",
        initialState:{
            diaryMap:{},
        },
        reducers:{
            setToken(state,action){
                state.token=action.payload.token
                setTokenInLocal(action.payload.token)
            }
            ,setUserInfo(state,action){
                state.uid=action.payload.uid
            }
            ,clearUserInfo(state){
                state.token=''
                state.uid={}
                removeToken()
            }
        }
    }



)