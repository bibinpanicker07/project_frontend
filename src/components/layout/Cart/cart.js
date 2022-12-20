import React from "react";
import styles from "./cart.module.css";
import { useEffect, useState } from "react";
import axios from "axios";
import Navigation from "../navigation/Navigation";
import {useNavigate} from "react-router-dom";

export default function Cart() {
  const themeDefault = localStorage.getItem("token")

  
  const navigate=useNavigate();
  const [cart, setCart] = useState([]);
  
  useEffect(() => {
    axios
      .get(
        `http://localhost:8080/cart/?token=${themeDefault}`
      )
      .then((response) => {
        console.log(response.data);
        setCart(response.data);
      });
  }, []);

  const Increment = (data, Qty, id) => {
    console.log(id);
    if (data == "INCREMENT") {
      const objIndex = cart?.cartItems?.findIndex((obj) => obj.id == id);
      console.log(objIndex);
      const quantityX = cart.cartItems[objIndex].quantity + 1;
      console.log(quantityX);
      let requestBody = {
        id: id,
        productId: 20,
        quantity: quantityX,
      };
      console.log(requestBody);
      
      axios
        .put(
          `http://localhost:8080/cart/update/?token=${themeDefault}`,
          requestBody
        )
        .then((response) => {
          console.log(response.data);
          axios
            .get(
              `http://localhost:8080/cart/?token=${themeDefault}`
            )
            .then((response) => {
              console.log(response.data);
              setCart(response.data);
            });
        });
    }else{
        const objIndex = cart?.cartItems?.findIndex((obj) => obj.id == id);
      console.log(objIndex);
      const quantityX = cart.cartItems[objIndex].quantity - 1;
      console.log(quantityX);
      let requestBody = {
        id: id,
        productId: 20,
        quantity: quantityX,
      };
      console.log(requestBody);
      axios
        .put(
          `http://localhost:8080/cart/update/?token=${themeDefault}`,
          requestBody
        )
        .then((response) => {
          console.log(response.data);
          axios
            .get(
              `http://localhost:8080/cart/?token=${themeDefault}`
            )
            .then((response) => {
              console.log(response.data);
              setCart(response.data);
            });
        });
    }
  };

  console.log(cart);
  return (
    <>
      <Navigation />
      <div className="container p-0">
        <div className={"card shadow " + styles.cardSetup}>
          <div className={"card-header " + styles.headerCrd}>
            <div className={"text-center " + styles.cartMain}>Cart</div>
          </div>

          <div
            className={"card-body " + styles.cardBody}
            data-bs-spy="scroll"
            data-bs-target="#navbar-example"
          >
            <div className="card-text" id="navbar-example">
              {cart?.cartItems?.map((item, index) => {
                return (
                  <div className="row p-3" key={index}>
                    <div className="col-md-8 d-flex">
                      <img
                        src={item?.product?.imageURL}
                        className={"img-fluid " + styles.productImg}
                        alt="..."
                      />
                      <div className="row" style={{ marginLeft: "15px" }}>
                        <div className={styles.itemName}>
                          {item?.product?.name}
                        </div>
                        <div className={styles.itemDes}>
                          {item?.product?.description}
                        </div>
                        <div className={styles.itemDes}>
                          Amount : &#8377;{item?.product?.price}
                        </div>
                      </div>
                    </div>

                    <div className="col-md-4">
                      <div className="d-flex mx-auto">
                        <div style={{ fontSize: "22px" }}>Qty :</div>
                        <button className={styles.btnStyle} onClick={() =>
                            Increment("DECREMENT", item.quantity, item.id)
                          }>-</button>{" "}
                        <div className={styles.counterSet}>
                          {item?.quantity}
                        </div>
                        <button
                          className={styles.btnStyle}
                          onClick={() =>
                            Increment("INCREMENT", item.quantity, item.id)
                          }
                        >
                          +
                        </button>{" "}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          <div className="d-flex justify-content-evenly pt-5 pb-5">
              <div className={styles.totalAmt}>
                Total amount :<span> &#8377;{cart?.totalCost}</span>{" "}
              </div>
              <div>
                <button className={" " + styles.cartPlaceOrderBtn} onClick={(e) => {
                                        navigate("/order");
                                    }}>
                  place order
                </button>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </>
  );
}


