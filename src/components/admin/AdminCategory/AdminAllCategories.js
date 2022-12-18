
import Product from "../../ProductList/product";
import { useEffect, useState } from "react";
import axios from "axios";
import React from "react";
import AdminCategoryList from "./AdminCategoryList";
import AdminProduct from "./AdminProduct";

export default function AdminAllCategories(props) {
  const [category, setCategory] = useState([]);
 
  useEffect(() => {
    axios.get("http://localhost:8080/category/").then((response) => {
      setCategory(response.data);
    });
  }, []);



  return (
    <div className="container-fluid p-0">
      <div>
      {/* <Navigation /> */}
        <AdminCategoryList categories={category} />
        <AdminProduct />
      </div>
    </div>
  );
}
