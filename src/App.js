import './App.css';
import {Route,Routes} from 'react-router-dom';
import AllCategories from './components/layout/category/AllCategories';
import ProductListById from './components/layout/category/ProductListById';
import Cart from './components/layout/Cart/cart';
import Login from "./components/Authentication/Login";
import SignUp from './components/Authentication/Signup';
import Order from './components/Order/Order';
import YourOrder from './components/yourOrder/YourOrder';
import {useNavigate} from "react-router-dom";
import AddProducts from './components/admin/AddProducts/AddProducts';
import AddCategory from './components/admin/AddCategory/AddCategory';
import AdminAllCategories from './components/admin/AdminCategory/AdminAllCategories';
import AdminProductListById from './components/admin/AdminCategory/AdminProductById';
import AdminOrders from './components/admin/AdminOrders/AdminOrders';

function App() {
  const navigate=useNavigate();
  return (
    <div className="App">
     
{/*       
      <AllCategories /> */}
      <Routes>
     
      <Route path="/" element={<Login/>}/>
      <Route path="/signup" element={<SignUp/>}/>
      
      {/* <Route element={<ProtectedRoutes auth={isAuth}/>}> */}
      <Route path="/AllCategories" element={<AllCategories />}></Route>
      <Route path="/:id" element={<ProductListById />}></Route>
      <Route path="/cart" element={<Cart />}></Route>
      <Route path="/order" element={<Order/>}></Route>
      <Route path="/yourOrders" element={<YourOrder />}></Route>
      <Route path="/AddProducts" element={<AddProducts />}></Route>
      <Route path="/AddCategory" element={<AddCategory />}></Route>
      <Route path="/AdminAllCategories" element={<AdminAllCategories />}></Route>
      <Route path="/admin/:id" element={<AdminProductListById />}></Route>
      <Route path="/AdminOrders" element={<AdminOrders />}></Route>
      {/* </Route> */}
      </Routes>
      
   
    </div>
  );
}

export default App;
