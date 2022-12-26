import React from "react";
import AdminNavigation from "../AdminNavigation/AdminNavigation";
import styles from "./AddProducts.module.css";
import { useEffect,useState } from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";
function AddProducts() {




  const themeDefault = localStorage.getItem("token")
  const navigate=useNavigate();
  const [product, setProduct] = useState({
    name: "",
    imageURL: "",
    price: 0,
    description:"",
    categoryName:""
  });
  function addProduct(e) {
    e.preventDefault();
    if(localStorage.getItem("role")==="admin")
    {
    axios
      .post(`http://localhost:8080/product/addProducts/?token=${themeDefault}`, product)
      .then((response) => {
        alert(response.data);
    
  }).catch((error)=>{
    alert("Enter all details");
        //navigate("/");
    }
   );}else{
    alert("You are not an Admin..");
        navigate("/");
   }
}
  return (
    <>
      <AdminNavigation />
      <div className="container p-0">
        <div className={"card shadow " + styles.cardSetup}>
          <div className={"card-header " + styles.headerCrd}>
            <div className={"text-center " + styles.cartMain}>ADD PRODUCTS</div>
          </div>

          <div
            className={"card-body " + styles.cardBody}
            data-bs-spy="scroll"
            data-bs-target="#navbar-example"
          >
            <div className="card-text" id="navbar-example"></div>
            <div className="container">
              <form>
                <div class="mb-3">
                  <label for="exampleInputEmail1" class="form-label">
                    Product Name
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="exampleInputEmail1"
                    value={product.name}
                    required
                    onChange={(e) =>
                      setProduct({ ...product, name: e.target.value })
                    }
                  />
                </div>
                <div class="mb-3">
                  <label for="exampleInputEmail1" class="form-label">
                    Image url
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="exampleInputEmail1"    
                    value={product.imageURL}
                    required
                    onChange={(e) =>
                      setProduct({ ...product, imageURL: e.target.value })
                    }              />
                </div>
                <div class="mb-3">
                  <label for="exampleInputEmail1" class="form-label">
                    Price
                  </label>
                  <input
                    type="number"
                    class="form-control"
                    id="exampleInputEmail1" 
                    value={product.price}
                    required
                    onChange={(e) =>
                      setProduct({ ...product, price: e.target.value })
                    }                 />
                </div>
                <div class="mb-3">
                  <label for="exampleInputEmail1" class="form-label">
                    Description
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="exampleInputEmail1"
                    value={product.description}
                    required
                    onChange={(e) =>
                      setProduct({ ...product, description: e.target.value })
                    }
                  />
                </div>
                <div class="mb-3">
                  <label for="exampleInputPassword1" class="form-label">
                    Category Name
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="exampleInputPassword1"
                    value={product.categoryName}
                    required
                    onChange={(e) =>
                      setProduct({ ...product, categoryName: e.target.value })
                    }
                  />
                </div>
                <button type="submit" class="btn btn-success"
                onClick={(e) => {
                  addProduct(e);
                }}>
                  Add Product
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}


export default AddProducts;
