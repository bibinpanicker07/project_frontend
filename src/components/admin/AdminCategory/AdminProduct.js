import React, { useRef } from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import styles from "./AdminProduct.module.css";
import { useParams } from "react-router-dom";
import {Link,useNavigate} from "react-router-dom"
import AdminNavigation from "../AdminNavigation/AdminNavigation";

export default function AdminProduct(props) {
  const [isShown, setIsShown] = useState(false);
  const navigate=useNavigate();
  const params = useParams();
  console.log(params.id);
  const [product, setProduct] = useState([]);

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
  return (<>
    <AdminNavigation />
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
