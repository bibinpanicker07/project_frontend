import { Link } from "react-router-dom";
import "./AdminNavigation.module.css";


var isAuth =true;
function AdminNavigation() {

  const logout = () => {  localStorage.clear();
    window.location.href = '/';
  };
  return (
    <div>
      <nav className="navbar navbars navbar-expand-lg fixed-top">
        <div className="container-fluid p-0">
          <Link to={"/AdminAllCategories"} className="navbar-brand appName ">
            <div >Grocery Shop</div>
          </Link>
          <div
            className="collapse navbar-collapse "
            id="navbarSupportedContent"
          >
            <div className="ms-auto cartMainContainer">
              <Link style={{ textDecoration: "none" }} to="/AddCategory">
                <span className="cartTextSetup1">Add Category </span>
              </Link>
              <Link style={{ textDecoration: "none" }} to="/AddProducts">
                <span className="cartTextSetup1">Add Product </span>
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
export default AdminNavigation;
export {isAuth};