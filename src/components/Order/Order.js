import Navigation from "../layout/navigation/Navigation";
import "./Order.css";
import React, { useState, useEffect } from "react";
import axios from "axios";

import styles from "../layout/Cart/cart.module.css";
import { themeDefault } from "../Authentication/Login";
import { useNavigate } from "react-router-dom";

function Order() {
  const navigate = useNavigate();
  const [cart, setCart] = useState([]);
  const [amount, setamount] = useState();
  
  const handlesubmit = (e) => {
    e.preventDefault();

    if (amount === "") {
      alert("please enter amount");
    } else {
      var options = {
        key: "rzp_test_LLKoI7P3DwwpEE",
        key_secret: "ZwsvP9HGgxZANcYzgNGozKyM",
        amount: amount * 100,
        currency: "INR",
        name: "Grocery Shop",
        description: "Thank you for shopping",
        handler: function (response) {
          // alert(response.razorpay_payment_id);
          axios.delete(`http://localhost:8080/cart/delete/?token=${themeDefault}`);
          axios
            .post(
              `http://localhost:8080/order/placeorder?token=${themeDefault}`,
              user
            )
            .then((response) => {
              console.log(response.data);
              alert("Order Placed successfully!!!");
              navigate("/AllCategories");
            })
            .catch((error) => {
              alert("Enter All Details ");
            });

        },
        profill: {
          name: "Nasreena",
          email: "nasreenaparvin95@gmail.com",
          contact: "9745627110",
        },
        notes: {
          address: "Razorpay corporate office",
        },
        theme: {
          color: "#3399cc",
        },
      };
      var pay = new window.Razorpay(options);
      pay.open();
    }
    postUser(e);  
  };
  useEffect(() => {
    axios
      .get(`http://localhost:8080/cart/?token=${themeDefault}`)
      .then((response) => {
        // console.log(response.data);
        setCart(response.data);
        setamount(response.data.totalCost)
      });
  }, []);

  const [user, setUser] = useState({
    fullName: "",
    fullAddress: "",
    contactNumber: "",
    checkOut: {},
  });
  user.checkOut = cart;

  function postUser(e) {
    e.preventDefault();
    //console.log(user);
    
  }

  return (
    <>
      <Navigation />
      <div className="container orders">
        <div className="accordion accordion-flush" id="accordionFlushExample">
          <div className="accordion-item">
            <h2 className="accordion-header" id="flush-headingOne">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseOne"
                aria-expanded="false"
                aria-controls="flush-collapseOne"
              >
                DELIVERY DETAILS
              </button>
            </h2>
            <div
              id="flush-collapseOne"
              className="accordion-collapse collapse"
              aria-labelledby="flush-headingOne"
              data-bs-parent="#accordionFlushExample"
            >
              <div className="accordion-body">
                <form className="row g-3 needs-validation" novalidate>
                  <div className="col-md-6">
                    <label for="validationCustom01" className="form-label">
                      Full name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="validationCustom01"
                      value={user.fullName}
                      required
                      onChange={(e) =>
                        setUser({ ...user, fullName: e.target.value })
                      }
                    />
                    <div className="valid-feedback">Looks good!</div>
                  </div>
                  <div className="col-md-6">
                    <label for="validationCustom02" className="form-label">
                      Phone Number
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="validationCustom02"
                      value={user.contactNumber}
                      required
                      onChange={(e) =>
                        setUser({ ...user, contactNumber: e.target.value })
                      }
                    />
                    <div className="valid-feedback">Looks good!</div>
                  </div>

                  <div className="col-md-12">
                    <label for="validationCustom03" className="form-label">
                      Address
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="validationCustom03"
                      value={user.fullAddress}
                      required
                      onChange={(e) =>
                        setUser({ ...user, fullAddress: e.target.value })
                      }
                    />
                    <div className="invalid-feedback">
                      Please provide a valid city.
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="flush-headingTwo">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseTwo"
                aria-expanded="false"
                aria-controls="flush-collapseTwo"
              >
                ORDER SUMMARY
              </button>
            </h2>
            <div
              id="flush-collapseTwo"
              className="accordion-collapse collapse"
              aria-labelledby="flush-headingTwo"
              data-bs-parent="#accordionFlushExample"
            >
              <div className="accordion-body">
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

                            <div className={styles.counterSet}>
                              {item?.quantity}
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                  <div className="d-flex justify-content-evenly pt-5 pb-5">
                    <div className={styles.totalAmt}>
                      Total amount :<span> &#8377;{cart?.totalCost}</span>{" "}
                    </div>
                    
                    <div>
                      <button
                        className="btn btn-success"
                        type="submit"
                        onClick={(e) => {
                          
                          handlesubmit(e);                         
                        }}
                      >
                        CONFIRM{" "}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Order;
