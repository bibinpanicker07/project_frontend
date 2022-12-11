import './App.css';
import {Route,Routes} from 'react-router-dom';
import AllCategories from './components/layout/category/AllCategories';
import Product from './components/ProductList/product';
import ProductListById from './components/layout/category/ProductListById';
import Cart from './components/layout/Cart/cart';
function App() {
  return (
    <div className="App">
     
{/*       
      <AllCategories /> */}
      
      <Routes>
      <Route path="/" element={<AllCategories />}></Route>
      <Route path="/:id" element={<ProductListById />}></Route>
      <Route path="/cart" element={<Cart />}></Route>
      </Routes>
   
    </div>
  );
}

export default App;
