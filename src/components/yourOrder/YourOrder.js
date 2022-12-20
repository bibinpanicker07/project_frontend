import axios from "axios";
import React, { useState, useEffect } from "react";
import Navigation from "../layout/navigation/Navigation";
import styles from "./YourOrder.module.css";
import Accordion from "react-bootstrap/Accordion";
function OrderHistory(props) {

  const [cart, setCart] = useState([]);
  useEffect(() => {
    const themeDefault = localStorage.getItem("token")
    axios
      .get(`http://localhost:8080/order/?token=${themeDefault}`)
      .then((response) => {
        setCart(response.data);
      });
  }, []);

  return (
    <>
      <Navigation />

      <div className={"container p-0 "}>
        <div className={"card shadow " + styles.cardSetup}>
          <div className={"card-header " + styles.headerCrd}>
            <div className={"text-center " + styles.orderMain}>Your Orders</div>
          </div>

          <div
            className={"card-body "}
            data-bs-spy="scroll"
            data-bs-target="#navbar-example"
          >
            <div className="card-text" id="navbar-example">
              {cart?.map((item, index) => {
                return (
                  <div>
                    <Accordion>
                      <Accordion.Item eventKey="0">
                        <Accordion.Header>
                        <div className={"col-md-4"}>    
                                  <div className={"d-flex mx-auto"}>
                                    <div className={styles.counterSet}>
                                    Ordered on : {item?.date} 
                                    </div>
                                    <div className={styles.counterSet1}>
                                    Total Amount : &#8377;{item?.orderAmount}
                                    </div>
                                  </div>                                                             
                                </div>
                        </Accordion.Header>
                        <Accordion.Body>
                          {item?.ocarts?.map((item1, index1) => {
                            // total=item.quantity*item.product.price;
                            return (
                              <div className="row p-3" key={index1}>
                                <div className="col-md-8 d-flex">
                                  <img
                                    src={item1?.product?.imageURL}
                                    className={"img-fluid " + styles.productImg}
                                    alt="..."
                                  />
                                  <div
                                    className="row"
                                    style={{ marginLeft: "15px" }}
                                  >
                                    <div className={styles.itemName}>
                                      {item1?.product?.name}
                                    </div>
                                    <div className={styles.itemDes}>
                                      {item1?.product?.description}
                                    </div>
                                    <div className={styles.itemDes}>
                                      Amount : &#8377;{item1?.product?.price}
                                    </div>
                                    <div className={styles.itemDes}>
                                      Qty : {item1.quantity}
                                    </div>
                                  </div>
                                </div>

                                
                              </div>
                            );
                          })}
                        </Accordion.Body>
                      </Accordion.Item>
                    </Accordion>
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

export default OrderHistory;
