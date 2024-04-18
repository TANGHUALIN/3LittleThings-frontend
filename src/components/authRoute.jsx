import {  useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
export function AuthRoute({children}){
    const token=useSelector(state => state.user.token)
    if(token){
        console.log("token in AuthRoute,",token)
        return <>{children}</>
    }else{
        return <Navigate to={'/'} replace />
    }
}