import { Navigate } from "react-router-dom";
import { getToken } from "../utils";
export function AuthRoute({children}){
    const token=getToken()
    if(token){
        console.log("token in AuthRoute,",token)
        return <>{children}</>
    }else{
        return <Navigate to={'/'} replace />
    }
}