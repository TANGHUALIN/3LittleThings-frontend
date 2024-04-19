import { createSlice } from "@reduxjs/toolkit";
import { request} from "../../utils";
import { verifyAPI, loginAPI } from "../../apis/userAPI";
import { useDispatch } from "react-redux";
import { setToken as setTokenInLocal } from "../../utils";
const userStore=createSlice(
    {
        name:"user",
        initialState:{
            token:'',
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
                state.uid=''
            }
        }
    }
)
const {setToken,setUserInfo,clearUserInfo}=userStore.actions
const userReducer=userStore.reducer

const fetchVerify=(temptoken)=>{
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
const fetchLogin=(formData)=>{
    return async(dispatch)=>{
        const res =await loginAPI(formData)
        dispatch(setToken(res.headers['authorization'].split(' ')[1]))
        dispatch(setUserInfo(res.data.uid))
    }
}

export{  fetchVerify,fetchLogin,setToken,clearUserInfo}
export default userReducer