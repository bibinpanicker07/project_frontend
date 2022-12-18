import React from 'react';
import Navigation from '../layout/navigation/Navigation';
import styles from "./AddCategory.module.css";
function AddCategory(props) {
    return (
        <>
        <Navigation/>
        <div className="container p-0">
        <div className={"card shadow " + styles.cardSetup}>
          <div className={"card-header " + styles.headerCrd}>
            <div className={"text-center " + styles.cartMain}>ADD CATEGORY</div>
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
    <label for="exampleInputEmail1" class="form-label">Category Name</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
  </div>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Description</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    
  </div>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Image url</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    
  </div>
  <button type="submit" class="btn btn-primary">Add Category</button>

</form>
        </div>
        </div>
        </div>
        </div>
       
        </>
    );
}

export default AddCategory;