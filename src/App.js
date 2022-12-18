import './App.css';
import {Route,Routes} from 'react-router-dom';
import AllCategories from './components/layout/category/AllCategories';
import ProductListById from './components/layout/category/ProductListById';
import Cart from './components/layout/Cart/cart';
import Login from "./components/Authentication/Login";
import SignUp from './components/Authentication/Signup';
import Order from './components/Order/Order';
import OrderHistory from './components/OrderHistory/OrderHistory';
import ProtectedRoutes from './In ProtectedRoutes';
import {isAuth} from './components/layout/navigation/Navigation';
import {useNavigate} from "react-router-dom";
import AddProducts from './components/AddProducts/AddProducts';
import AddCategory from './components/AddCategory/AddCategory';
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
      <Route path="/yourOrders" element={<OrderHistory/>}></Route>
      <Route path="/AddProducts" element={<AddProducts/>}></Route>
      <Route path="/AddCategory" element={<AddCategory/>}></Route>
      {/* </Route> */}
      </Routes>
      
   
    </div>
  );
}

export default App;
