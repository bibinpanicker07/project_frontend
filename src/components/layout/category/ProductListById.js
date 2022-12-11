import React from 'react'
import Product from '../../ProductList/product'
import Navigation from '../navigation/Navigation'
import CategoryLists from './CategoryLists'
import { useEffect, useState } from "react";
import axios from "axios";

export default function ProductListById() {

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
  )
}
