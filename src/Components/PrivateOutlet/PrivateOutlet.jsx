import { Navigate, Outlet, useLocation } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";


export const PrivateOutlet=()=>{
    const {user}=useAuth()
    const location=useLocation()

    return user?.email || user?.gmail ? <Outlet/>:
    <Navigate to="/login" state={{from: location }} replace/>
}
