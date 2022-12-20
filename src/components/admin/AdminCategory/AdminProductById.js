import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import AdminCategoryList from "./AdminCategoryList";
import AdminNavigation from "../AdminNavigation/AdminNavigation";
import AdminProduct from "./AdminProduct";

export default function AdminProductListById() {
  const [category, setCategory] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:8080/category/").then((response) => {
      setCategory(response.data);
    });
  }, []);

  return (
    <div className="container-fluid p-0">
      <div>
        <AdminNavigation />
        <AdminCategoryList categories={category} />
        <AdminProduct />
      </div>
    </div>
  );
}
