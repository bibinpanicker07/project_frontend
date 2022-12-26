import React, { useEffect, useState } from "react";
import axios from "axios";
import "./login.css";
import { Link, useNavigate } from "react-router-dom";
import AdminAllCategories from "../admin/AdminCategory/AdminAllCategories";
import AllCategories from "../layout/category/AllCategories";

let themeDefault = "";
let role = "";
function Login() {
  useEffect(() => {
    const loggedInUser = localStorage.getItem("token");
    if (loggedInUser) {
      role = localStorage.getItem("role");
      themeDefault = loggedInUser;
    }
  }, []);
  const navigate = useNavigate();
  const [user, setUser] = useState({ email: "", password: "" });

  function postUser(e) {
    e.preventDefault();
    console.log(user);
    axios
      .post("http://localhost:8080/user/signin", user)
      .then((response) => {
        console.log(response.data);
        themeDefault = response.data.token;
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("role", response.data.role);
        if (response.data.role === "admin") {
          navigate("/AdminAllCategories");
        } else if (response.data.role === "customer") {
          navigate("/AllCategories");
        }
      })
      .catch((error) => {
        alert("Incorrect Email Id or password ");
      });
  }

  if (themeDefault) {
    if (role == "admin") {
      return (
        <>
          <AdminAllCategories />
        </>
      );
    } else if (role == "customer") {
      return (
        <>
          <AllCategories />
        </>
      );
    }
  }

  return (
    <div className="body">
      <div class="container py-4 h-100">
        <div class="row d-flex justify-content-left  align-items-center h-100 ">
          <div class="col-xl-6">
            <div class=" text-black">
              <div class="row g-0">
                <div class="col-lg-6">
                  <div class=" p-md-2 mx-md-2">
                    <div class=" text-left mt-1 mb-1 pb-1">
                      <h1 class="mt-1 mb-5 pb-1">
                        <p className="welcome">WELCOME!!</p>
                      </h1>
                      <form>
                        <label className="label">
                          Email<br></br>
                          <input
                            type="text"
                            value={user.email}
                            onChange={(e) =>
                              setUser({ ...user, email: e.target.value })
                            }
                            className="input"
                          />
                        </label>
                        <br></br>
                        <label className="label">
                          Password<br></br>
                          <input
                            type="password"
                            value={user.password}
                            onChange={(e) =>
                              setUser({ ...user, password: e.target.value })
                            }
                            className="input"
                          />
                        </label>
                        <br></br>

                        <button
                          className="sbtn"
                          onClick={(e) => {
                            postUser(e);
                          }}
                        >
                          Login
                        </button>
                      </form>

                      <h5>
                        Don't have an account?
                        <Link to="/signup">SignUp</Link>
                      </h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
//export {logout};

export { themeDefault };
