
import Product from "../../ProductList/product";
import CategoryLists from "./CategoryLists";
import { useEffect, useState } from "react";
import Navigation from '../navigation/Navigation';
import axios from "axios";
import React from "react";

export default function AllCategories(props) {
  const [category, setCategory] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:8080/category/").then((response) => {
      setCategory(response.data);
    });
  }, []);



  return (
    <div className="container-fluid p-0">
      <div>
      <Navigation />
        <CategoryLists categories={category} />
        <Product />
      </div>
    </div>
  );
}
