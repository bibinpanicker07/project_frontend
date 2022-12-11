import React, { useRef } from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import styles from "./product.module.css";
import { useParams } from "react-router-dom";

export default function Product(props) {
  const params = useParams();
  console.log(params.id)
  const [product, setProduct] = useState([]);
  // console.log(props?.setCmp)
  useEffect(() => {
    if ( params.id) {
        const setID = params.id
      axios.get(`http://localhost:8080/category/ ${setID}` ).then((response) => {
        setProduct(response.data.products);
      });
      
    }else{
      axios.get("http://localhost:8080/product/").then((response) => {
        setProduct(response.data);
      });
    }
   
  }, [params.id]);

  const addCartProduct = (itemId,itemCount) =>{
    let requestBody = {
      productId: itemId,
      quantity: itemCount
    }
    axios.post("http://localhost:8080/cart/add?token=33c0b98d-4711-48bb-a898-aa9d38e03c3d",requestBody).then((response) => {
        console.log(response.data)
      });
  }

  const Increment = (data,payload,id) => {
      if (data == 'INCREMENT') {
      const objIndex = product.findIndex((obj => obj.id == id));
      product[objIndex].count = product[objIndex].count + 1;
      console.log(product);
      setProduct(product);
      }
  }
  const Decrement = (data,payload,id) => {
    if (data == 'DECREMENT') {
    const objIndex = product.findIndex((obj => obj.id == id));
    product[objIndex].count = product[objIndex].count - 1;
    console.log(product)
    setProduct(product);
    }
}
 
  return (
    <div className="container-fluid p-5" >
      <div>
        <div className={styles.heading} style={{paddingTop:'11%',textAlign:"center"}}>Products</div>
        <div>
          <div className="row" >
            {product.map((item, index) => {
              return (
                <div className={"col-12 col-md-4"}  key={index}>
                  <div className={"card m-4 p-1 shadow-sm " + styles.crdSetup}>
                    <div className="row g-0">
                      <div className="col-md-4" style={{
                        backgroundImage: `url(${item?.imageURL})`,
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: 'cover'
                      }}>
                        {/* <img
                          src={item.imageURL}
                          className="img-fluid"
                          alt="..."
                        /> */}
                      </div>
                      <div className="col-md-8" style={{padding:'2%'}}>
                        <div className="card-body">
                          <h5 className="card-title">{item.name}</h5>
                          <p className="card-text">{item.description}</p>
                          <p className="card-text">
                            <small className="text-muted">
                              &#8377; {item.price}
                            </small>
                          </p>

                          <div className="d-flex">
                            Qty: 
                            <button className={styles.btnStyle} onClick={() => Decrement('DECREMENT',item.count,item.id)}>-</button>{" "}
                            <div className={styles.counterSet}>{item.count}</div>
                            <button className={styles.btnStyle} onClick={() => Increment('INCREMENT',item.count,item.id)}>+</button>{" "}
                  
                          </div>
                          <button type="button" className="btn btn-success" onClick={() => addCartProduct(item.id,item.count)}>
                            Add to cart
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}