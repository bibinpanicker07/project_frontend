import { Link } from "react-router-dom";
import "./Navigation.css";
import { FaShoppingCart } from "react-icons/fa";
function Navigation() {
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
                <FaShoppingCart className="iconSetup" size={28} />
                <span className="cartTextSetup">Cart</span>
              </Link>
              <Link style={{textDecoration: 'none'}} to="/" >
                <span className="cartTextSetup1">Logout</span>
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
export default Navigation;
