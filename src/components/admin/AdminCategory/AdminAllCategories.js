import { useEffect, useState } from "react";
import axios from "axios";
import React from "react";
import AdminCategoryList from "./AdminCategoryList";
import AdminProduct from "./AdminProduct";
import { useNavigate } from "react-router-dom";
export default function AdminAllCategories(props) {
  const navigate = useNavigate();
  const [category, setCategory] = useState([]);
 
  useEffect(() => {
    if(localStorage.getItem("role")=="admin"){
    axios.get("http://localhost:8080/category/").then((response) => {
      setCategory(response.data);
    });
  }else{
    navigate("/AllCategories");
  }
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
