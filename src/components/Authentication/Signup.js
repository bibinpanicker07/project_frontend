import background from "../img/signup.jpg";
import styled from 'styled-components';
import './signup.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, useNavigate } from "react-router-dom"
import React, { useState } from "react";
import axios from "axios";

function SignUp() {
    const navigate = useNavigate();
    const [user, setUser] = useState({
        fname:"",
        lname:"",
        email: "",
        password: "",
    });
    function postUser(e) {
        e.preventDefault();
        console.log(user);
        axios
          .post("http://localhost:8080/user/signup", user)
          .then((response) => {
            console.log(response.data);
            alert("Account created successfully!!!");
            navigate("/");

          }).catch((error)=>{
            alert("Enter your details correctly")
           });
      }
    const SButton = styled.button`
      background-color: #314402;
      color: white;
      font-size: 20px;
      flex-wrap: wrap;
      padding: 15px 145px;
      border-radius: 5px;
      margin: 2.2rem 0px;
      cursor: pointer;`
    const myStyle = {
        backgroundImage: `url(${background})`,
        height: '100vh',
        marginTop: '0px',
        fontSize: '30px',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
    };
    return (
        <div style={myStyle}>
            <div className='form'>
                <h1 className='welcome'>Create New Account</h1>
                <form >
                    <label className='label'>First Name<br></br>
                        <input
                            type="text"
                             value={user.fname}
                             onChange={(e) => setUser({...user,fname:e.target.value})}
                            className="input" />
                    </label><br></br>
                    <label className='label'>Last Name<br></br>
                        <input
                            type="text"
                            value={user.lname}
                            onChange={(e) => setUser({...user,lname:e.target.value})}
                            className="input" />
                    </label><br></br>
                    <label className='label'>Email Id<br></br>
                        <input
                            type="email"
                             value={user.email}
                             onChange={(e) => setUser({...user,email:e.target.value})}
                            className="input" />
                    </label><br></br>
                    <label className='label'>Password<br></br>
                        <input
                            type="password"
                             value={user.password}
                             onChange={(e) => setUser({...user,password:e.target.value})}
                            className="input" />
                    </label><br></br>

                    <SButton  onClick={(e)=> {postUser(e);
                }} >SignUp</SButton >
                </form>
                <h5>Already has an account?

                    <Link to="/">Login</Link>
                </h5>
            </div>
        </div>
    );
}

export default SignUp;