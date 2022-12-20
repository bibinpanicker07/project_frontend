import React, { useRef } from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import styles from "./product.module.css";
import { useParams } from "react-router-dom";
import { themeDefault } from '../Authentication/Login';
import Navigation from "../layout/navigation/Navigation";
import {Link,useNavigate} from "react-router-dom"

export default function Product(props) {
  const [c,setC] = useState(0);
  const [isShown, setIsShown] = useState(false);
  const navigate=useNavigate();
  const params = useParams();
  console.log(params.id);
  const [product, setProduct] = useState([]);
  // useEffect(() => {
  //   const loggedInUser = localStorage.getItem("user");
  //   if (loggedInUser) {
  //     const foundUser = JSON.parse(loggedInUser);
  //     setUser(foundUser);
  //   }
  // }, []);
  useEffect(() => {
    if (params.id) {
      const setID = params.id;
      axios.get(`http://localhost:8080/category/ ${setID}`).then((response) => {
        setProduct(response.data.products);
      });
    } else {
      axios.get("http://localhost:8080/product/").then((response) => {
        setProduct(response.data);
      });
    }
  }, [params.id]);

  const addCartProduct = (itemId, itemCount) => {
setC(1);
    setIsShown((current) => !current);
    let requestBody = {
      productId: itemId,
      quantity: itemCount,
    };
    axios
      .post(`http://localhost:8080/cart/add?token=${themeDefault}`, requestBody)
      .then((response) => {
        alert(response.data);
       
       // count=response.data.cartItems.length;
      }).catch((error)=>{
        alert("Please Login to Continue");
        navigate("/");
       });
  };
  const Increment = (data, payload, id) => {
    if (data == "INCREMENT") {
      setIsShown((current) => !current);
      const objIndex = product.findIndex((obj) => obj.id == id);
      product[objIndex].count = product[objIndex].count + 1;

      console.log(product);
      setProduct(product);
    }
  };
  const Decrement = (data, payload, id) => {
    if (data == "DECREMENT") {
      setIsShown((current) => !current);
      const objIndex = product.findIndex((obj) => obj.id == id);
      if(product[objIndex].count>1)
      {
      product[objIndex].count = product[objIndex].count - 1;
      console.log(product);
      setProduct(product);
      }
    }
  };

  return (<>
    <Navigation/>
    <div className="container-fluid p-5">
      <div>
        <div
          className={styles.heading}
          style={{ paddingTop: "11%", textAlign: "center" }}
        >
          Products
        </div>
        <div>
          <div className="row">
            {product.map((item, index) => {
              return (
                <div className={"col-12 col-md-4"} key={index}>
                  <div className={"card m-4 p-1 shadow-sm " + styles.crdSetup}>
                    <div className="row g-0">
                      <div
                        className="col-md-4"
                        style={{
                          backgroundImage: `url(${item?.imageURL})`,
                          backgroundRepeat: "no-repeat",
                          backgroundSize: "cover",
                        }}
                      >
                        {/* <img
                          src={item.imageURL}
                          className="img-fluid"
                          alt="..."
                        /> */}
                      </div>
                      <div className="col-md-8" style={{ padding: "2%" }}>
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
                            <button
                              className={styles.btnStyle}
                              onClick={() =>
                                Decrement("DECREMENT", item.count, item.id)
                              }
                            >
                              -
                            </button>{" "}
                            <div className={styles.counterSet}>
                              {item.count}
                            </div>
                            <button
                              className={styles.btnStyle}
                              onClick={() =>
                                Increment("INCREMENT", item.count, item.id)
                              }
                            >
                              +
                            </button>{" "}
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
    </>
  );
}
