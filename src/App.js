import './App.css';
import {Route,Routes} from 'react-router-dom';
import AllCategories from './components/layout/category/AllCategories';
import ProductListById from './components/layout/category/ProductListById';
import Cart from './components/layout/Cart/cart';
import Login from "./components/Authentication/Login";
import SignUp from './components/Authentication/Signup';
import Order from './components/Order/Order';
import OrderHistory from './components/OrderHistory/OrderHistory';

function App() {
  return (
    <div className="App">
     
{/*       
      <AllCategories /> */}
      <Routes>
      <Route path="/" element={<Login/>}/>
      <Route path="/signup" element={<SignUp/>}/>
      <Route path="/AllCategories" element={<AllCategories />}></Route>
      <Route path="/:id" element={<ProductListById />}></Route>
      <Route path="/cart" element={<Cart />}></Route>
      <Route path="/order" element={<Order/>}></Route>
      <Route path="/yourOrders" element={<OrderHistory/>}></Route>
      </Routes>
      
   
    </div>
  );
}

export default App;
