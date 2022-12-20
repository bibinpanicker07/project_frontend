import React, { useEffect,useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import background from "../img/signup.jpg";
import "./signup.css";
import "./login.css";
import { Link, useNavigate } from "react-router-dom";
import AdminAllCategories from "../admin/AdminCategory/AdminAllCategories";
import AllCategories from "../layout/category/AllCategories"

let themeDefault = "";
function Login() {
    useEffect(() => {
        const loggedInUser = localStorage.getItem("token");
        if (loggedInUser) {
          const foundUser = loggedInUser;
          themeDefault=foundUser;
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
        localStorage.setItem('token', response.data.token)
        if (themeDefault === "4faae151-dbb8-4af7-a518-9f118a274504") {
          navigate("/AdminAllCategories");
        } else {
          navigate("/AllCategories");
        }
        // localStorage.setItem("token-info", JSON.stringify(user));

      })
      .catch((error) => {
        alert("Incorrect Email Id or password ");
      });
  }

  const myStyle = {
    backgroundImage: `url(${background})`,
    height: "100vh",
    marginTop: "0px",
    fontSize: "30px",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };
  if (themeDefault === "4faae151-dbb8-4af7-a518-9f118a274504") {
    return <>
        <AdminAllCategories />
        </>
  }
  if (themeDefault) {
    return <>
          <AllCategories />
        </>
  }

  return (
    <div style={myStyle}>
      <div className="form">
        <h1 className="welcome">WELCOME!!</h1>
        <form>
          <label className="label">
            Email<br></br>
            <input
              type="text"
              value={user.email}
              onChange={(e) => setUser({ ...user, email: e.target.value })}
              className="input"
            />
          </label>
          <br></br>
          <label className="label">
            Password<br></br>
            <input
              type="password"
              value={user.password}
              onChange={(e) => setUser({ ...user, password: e.target.value })}
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
  );
}

export default Login;
//export {logout};

export { themeDefault };
