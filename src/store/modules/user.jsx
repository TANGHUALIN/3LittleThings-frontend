import { createSlice } from "@reduxjs/toolkit";
import { request,setToken as setTokenInLocal,getToken } from "../../utils";
import { loginAPI, getUidAndDiaryAPI } from "../../apis/userAPI";
const userStore=createSlice(
    {
        name:"user",
        initialState:{
            token:getToken||'',
            uid:{},  
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
const {setToken,setUserInfo,clearUserInfo}=userStore.actions
const userReducer=userStore.reducer

const fetchLogin=(loginForm)=>{
    return async()=>{
        const res=await loginAPI(loginForm)
        dispatch(setToken(res.data.token))
    }
}
const fetchUserInfo=()=>{
    return async()=>{
        const res=await getUidAndDiaryAPI()
        dispatch(setUserInfo(res.data))
    }
}

export{  fetchUserInfo,fetchLogin,setToken,clearUserInfo}
export default userReducer