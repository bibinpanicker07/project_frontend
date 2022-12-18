import React from 'react';
import Navigation from '../layout/navigation/Navigation';
import styles from "./AddProducts.module.css";
function AddProducts() {
    return (<>
        <Navigation/>
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
        <div className='container'>
<form>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Product Name</label>
    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
  </div>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Image url</label>
    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    
  </div>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Price</label>
    <input type="number" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    
  </div>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Description</label>
    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Category ID</label>
    <input type="number" class="form-control" id="exampleInputPassword1"/>
  </div>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Count</label>
    <input type="number" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    
  </div>
  <button type="submit" class="btn btn-primary">Add Product</button>
</form>
        </div>
        </div>
        </div>
        </div>
       
        </>
    );
}

export default AddProducts;