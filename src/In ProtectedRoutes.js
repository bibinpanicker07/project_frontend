import { Outlet } from "react-router-dom";
import {useNavigate} from "react-router-dom";
const ProtectedRoutes = ({auth}) => {
    const navigate=useNavigate();
    return (auth === false ? <Outlet /> :  navigate("/signup"))
}
export default ProtectedRoutes;