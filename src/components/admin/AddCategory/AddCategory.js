import React from "react";
import AdminNavigation from "../AdminNavigation/AdminNavigation";
import { useState } from "react";
import styles from "./AddCategory.module.css";
import axios from "axios";
import { themeDefault } from "../../Authentication/Login";
function AddCategory() {
  
  const [category, setCategory] = useState({
    categoryName: "",
    description: "",
    imageUrl: "",
  });
  
  function addCategory(e) {
    axios
      .post(`http://localhost:8080/category/?token=ef8100d9-d420-4f17-8f50-0a6e124c8194`, category)
      .then((response) => {
        alert(response.data);
    
  })
}
  return (
    <>
      <AdminNavigation />
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
            <div className="container">
              <form>
                <div class="mb-3">
                  <label for="exampleInputEmail1" class="form-label">
                    Category Name
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="exampleInputEmail1"
                    value={category.categoryName}
                    required
                    onChange={(e) =>
                      setCategory({ ...category, categoryName: e.target.value })
                    }
                  />
                </div>
                <div class="mb-3">
                  <label for="exampleInputEmail1" class="form-label">
                    Description
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="exampleInputEmail1"
                    value={category.description}
                    required
                    onChange={(e) =>
                      setCategory({ ...category, description: e.target.value })
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
                    value={category.imageUrl}
                    required
                    onChange={(e) =>
                      setCategory({ ...category, imageUrl: e.target.value })
                    }
                  />
                </div>
                <button
                  type="submit"
                  class="btn btn-success"
                  onClick={(e) => {
                    addCategory(e);
                  }}
                >
                  Add Category
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AddCategory;
