import { Navigate,Outlet } from "react-router-dom";
// import {useNavigate} from "react-router-dom";

const auth = () =>{
    return localStorage.getItem("role")
}

const ProtectedRoutes = () => {
    // const navigate=useNavigate();
    const authh = auth();
    return (authh ? <Outlet /> :  <Navigate to="/" />)
}
export default ProtectedRoutes;
