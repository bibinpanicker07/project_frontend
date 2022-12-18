import { Link } from "react-router-dom";
import "./Navigation.css";
import { FaShoppingCart } from "react-icons/fa";
import Badge from "@material-ui/core/Badge";
import { themeDefault } from '../../Authentication/Login';
import axios from "axios";
import { useEffect,useState} from "react";


var isAuth =true;
function Navigation() {
  const [count,setCount]=useState(0);
 
  useEffect(() => {
    axios
      .get(
        `http://localhost:8080/cart/?token=${themeDefault}`
      )
      .then((response) => {        
        setCount(response.data.cartItems.length);
        console.log(count);
      }); 
  }, []);
  const logout = () => {  localStorage.clear();
    window.location.href = '/';
  };
  return (
    <div>
      <nav className="navbar navbars navbar-expand-lg fixed-top">
        <div className="container-fluid p-0">
          <Link to={"/AllCategories"} className="navbar-brand appName ">
            <div >Grocery Shop</div>
          </Link>
          <div
            className="collapse navbar-collapse "
            id="navbarSupportedContent"
          >
            <div className="ms-auto cartMainContainer">
              <Link style={{textDecoration: 'none'}} to="/cart">
              <Badge color="secondary" badgeContent={count} >
                <FaShoppingCart className="iconSetup" size={28} />
                </Badge>
                <span className="cartTextSetup">Cart</span>
              </Link>
              <Link style={{ textDecoration: "none" }} to="/yourOrders">
                <span className="cartTextSetup1">Your Orders</span>
              </Link>
              <Link style={{textDecoration: 'none'}} to="/" onClick={isAuth=false} >
                <span className="cartTextSetup1" onClick={logout}>Logout</span>
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
export default Navigation;
export {isAuth};