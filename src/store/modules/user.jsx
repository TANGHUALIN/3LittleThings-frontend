import { createSlice } from "@reduxjs/toolkit";
import { request,setToken as setTokenInLocal,getToken } from "../../utils";
import { verifyAPI, getUidAPI } from "../../apis/userAPI";
import { useDispatch } from "react-redux";
const userStore=createSlice(
    {
        name:"user",
        initialState:{
            token:getToken||'',
            uid:'',  
        },
        reducers:{
            setToken(state,action){
                state.token=action.payload
                setTokenInLocal(action.payload)
            }
            ,setUserInfo(state,action){
                state.uid=action.payload
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

const fetchLogin=(temptoken)=>{
    return async(dispatch)=>{
        const res=await verifyAPI(temptoken)
        console.log("res.headers,",res.headers)
        console.log("res auth,",res.headers['authorization'])
        console.log("token",res.headers['authorization'].split(' ')[1])
        dispatch(setToken(res.headers['authorization'].split(' ')[1]))
        dispatch(setUserInfo(res.data.uid))
        console.log("uid",res.data.uid)
    }
}
const fetchUserInfo=()=>{
    return async()=>{
        const res=await getUidAPI()
        dispatch(setUserInfo(res.data))
    }
}

export{  fetchUserInfo,fetchLogin,setToken,clearUserInfo}
export default userReducer