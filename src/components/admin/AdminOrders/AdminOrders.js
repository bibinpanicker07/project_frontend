import { themeDefault } from "../../Authentication/Login";
import axios from "axios";
import React, { useState, useEffect } from "react";
import {useNavigate} from "react-router-dom";
import styles from "./AdminOrders.module.css";
import Accordion from "react-bootstrap/Accordion";
import AdminNavigation from "../AdminNavigation/AdminNavigation";
function AdminOrders() {
    const navigate=useNavigate();
  const [cart, setCart] = useState([]);
  useEffect(() => {
    if(themeDefault==='55983344-98ce-46b4-aa8e-710abdd0350c')
    {
    axios
      .get(`http://localhost:8080/order/AllOrders/?token=${themeDefault}`)
      .then((response) => {
        setCart(response.data);
      })
      .catch((error)=>{
        alert("Enter all details");
            //navigate("/");
        }
       );}else{
        alert("You are not an Admin..");
            navigate("/");
       }
 
 
    }, []);

  return (
    <>
      <AdminNavigation />

      <div className={"container p-0 "}>
        <div className={"card shadow " + styles.cardSetup}>
          <div className={"card-header " + styles.headerCrd}>
            <div className={"text-center " + styles.orderMain}>All Orders</div>
          </div>

          <div
            className={"card-body "}
            data-bs-spy="scroll"
            data-bs-target="#navbar-example"
          >
            <div className="card-text" id="navbar-example">
              {cart?.map((item, index) => {
                // total=item.quantity*item.product.price;
                return (
                  <div>
                    <Accordion>
                      <Accordion.Item eventKey="0">
                        <Accordion.Header>
                        <div className={"col-md-4"}>    
                                  <div className={"d-flex mx-auto"}>
                                    <div className={styles.counterSet}>
                                    Order Id : {item?.id} 
                                    </div>
                                    <div className={styles.counterSet1}>
                                    Date : &#8377;{item?.date}
                                    </div>
                                  </div>                                                             
                                </div>
                        </Accordion.Header>
                        <Accordion.Body>
                        <div className="row p-3" key={index}>
                                <div className="col-md-8 d-flex">
                
                                  <div
                                    className="row"
                                    style={{ marginLeft: "15px" }}
                                  >
                                    <div className={styles.itemUser}>
                                      Customer Name : {item?.orderFullName}
                                    </div>
                                    <div className={styles.itemUser}>
                                      Address : {item?.orderFullAddress}
                                    </div>
                                    <div className={styles.itemUser}>
                                      Contact Number : {item?.orderContactNumber}
                                    </div>
                                    <div className={styles.itemUser}>
                                      Total Amount : &#8377;{item.orderAmount}
                                    </div>
                                  </div>
                                </div>

                                
                              </div>
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

export default AdminOrders;
